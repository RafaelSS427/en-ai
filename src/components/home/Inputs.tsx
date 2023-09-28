import { useState } from 'react'
import useLLM from 'usellm'
import { Input, Select, SelectItem } from '@nextui-org/react'
import { toast } from 'sonner'
import { useInputStore, useStore } from '@/store'
import { Actions, getInfoInput, getInstructions, getPrompt } from '@/lib'
import { EllipsisIcon, SendIcon } from '@/icons'
import { useInputAction } from '@/hooks'

const options = [
    { label: 'Tiempos verbales', value: Actions.TIMES, description: 'Podrás ver los tiempos de un determinado verbo' },
    { label: '¿Es regular o irregular?', value: Actions.TYPE, description: 'Podrás saber de qué tipo es un determinado verbo' },
    { label: 'Revisar gramática', value: Actions.CHECK, description: 'Revisión para un pequeño fragmento de texto' },
    { label: 'Ejemplos de uso', value: Actions.USE, description: 'Sabrás cuando usar un determinado verbo' },
]

export const Inputs = () => {
    // const [select, setSelect] = useState<Actions | null>(null)
    // const [inputText, setInputText] = useState<string>("")
    // const llm = useLLM({ serviceUrl: "https://usellm.org/api/llm" })
    const { isWriting } = useStore()
    const { select, inputText, setInputText, setSelect } = useInputStore()
    const { handleAction } = useInputAction({})

    // const handleInput = async () => {
    //     if (message.length > 0) writeMessage("")
    //     if (isWriting) return;
    //     const input = inputText
    //     const regex = /^\w+$/;

    //     if (!select) return toast.error('Asegurate de seleccionar una acción')
    //     if (input.length === 0) return toast.error('Asegurate de escribir algo')
    //     if (input.length > 255) return toast.error('El texto de entrada es demasiado grande')
    //     if ((select === Actions.TIMES || select === Actions.TYPE || select === Actions.USE) && !regex.test(input)) return toast.error('El texto de entrada no es válido')

    //     try {
    //         setIsWriting(true)
    //         //console.log({ input })
    //         // const { message: { content } } = await llm.chat({
    //         //     messages: [
    //         //         {
    //         //             role: 'system',
    //         //             content: `Parece que te has equivocado podrías, evalua nuevamente: ¿Este texto "${select === Actions.USE ? input : input.trim()}" está en idioma inglés? Si lo está responde "true"; en caso contrario "false"`
    //         //         },
    //         //     ]
    //         // })

    //         // console.log({ content })

    //         // if (content === "false") {
    //         //     setIsWriting(false)
    //         //     return toast.error('Solo se permite texto en inglés')
    //         // }

    //         await llm.chat({
    //             messages: [
    //                 {
    //                     role: "system",
    //                     content: getInstructions(select)
    //                 },
    //                 {
    //                     role: "user",
    //                     content: getPrompt(input.trim())[select]
    //                 }
    //             ],
    //             stream: true,
    //             onStream: ({ message }) => writeMessage(message.content)
    //         })
    //         setIsWriting(false)
    //     } catch (error) {
    //         console.error(error)
    //         setIsWriting(false)
    //     }
    // }

    return (
        <div className="flex flex-col-reverse sm:flex-row w-full gap-4 mt-4">
            <div className="flex items-end flex-1">
                <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    size="md"
                    label={getInfoInput[select || 'default'].label}
                    labelPlacement={'outside'}
                    placeholder={getInfoInput[select || 'default'].placeholder}
                    color="primary"
                    endContent={
                        <button disabled={isWriting} className="transition-colors delay-75 text-default fill-primary hover:fill-default rounded-full" onClick={handleAction}>
                            {
                                isWriting ? (
                                    <EllipsisIcon />
                                ) : (
                                    <SendIcon />
                                )
                            }
                        </button>
                    }
                    classNames={{
                        input: ["placeholder:text-opacity-60", "placeholder:text-default"],
                        inputWrapper: "text-default"
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleAction()
                        }
                    }}
                    description={
                        select && (<p className="text-xs text-end">{inputText.length}/255</p>)
                    }
                />
            </div>
            <Select
                size="md"
                labelPlacement="outside"
                placeholder="¿Qué deseas hacer?"
                label="Seleccionar una acción"
                color="primary"
                className="w-full sm:w-[250px]"
                classNames={{
                    value: ["text-default"],
                    selectorIcon: "text-default"
                }}
                onChange={(e) => {
                    setSelect(e.target.value as Actions)
                }}
            >
                {options.map((animal) => (
                    <SelectItem className="text-[#888]" key={animal.value} value={animal.value}>
                        {animal.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
    )
}