import { Actions, getInstructions, getPrompt } from '@/lib'
import { useInputStore, useStore } from '@/store'
import { useRouter } from 'next/router'
import { toast } from 'sonner'
import useLLM from 'usellm'

type Props = {
    isRegenerate?: boolean
}

export const useInputAction = ({ isRegenerate = false }:Props) => {
    const llm = useLLM({ serviceUrl: "https://usellm.org/api/llm" })
    const router = useRouter()

    const { isWriting, message, writeMessage, setIsWriting } = useStore()
    const { select, inputText } = useInputStore()

    const handleAction = async () => {
        if (message.length > 0) writeMessage("")
        if (isWriting) return;

        const regex = /^\w+$/;

        if (!select) return toast.error('Asegurate de seleccionar una acción')
        if (inputText.length === 0) return toast.error('Asegurate de escribir algo')
        if (inputText.length > 255) return toast.error('El texto de entrada es demasiado grande')
        if ((select === Actions.TIMES || select === Actions.TYPE || select === Actions.USE) && !regex.test(inputText)) return toast.error('El texto de entrada no es válido')

        
        if(!isRegenerate){
            router.replace({
                query: {
                    q: inputText.toLocaleLowerCase(),
                    select: select
                }
            })
        }

        try {
            setIsWriting(true)

            await llm.chat({
                messages: [
                    {
                        role: "system",
                        content: getInstructions(select)
                    },
                    {
                        role: "user",
                        content: isRegenerate ? `Parece que hubo un error con tu anterior respuesta: "${message}", por favor revisa y regenera una respuesta más precisa` : ""
                    },
                    {
                        role: "user",
                        content: `${getPrompt( isRegenerate ? router.query.q?.toString() || inputText.trim() : inputText.trim())[ isRegenerate ? router.query.select?.toString() as Actions || select : select]}`
                    }
                ],
                stream: true,
                onStream: ({ message }) => writeMessage(message.content)
            })
            setIsWriting(false)
        } catch (error) {
            console.error(error)
            setIsWriting(false)
        }
    }

    return {
        handleAction
    }
}