
import { Input, Select, SelectItem } from '@nextui-org/react'
import { useInputStore, useStore } from '@/store'
import { Actions, generateAudio, getInfoInput } from '@/lib'
import { EllipsisIcon, SendIcon, SpeakerWaveIcon } from '@/icons'
import { useInputAction } from '@/hooks'

const options = [
    { label: 'Tiempos verbales', value: Actions.TIMES, description: 'Podrás ver los tiempos de un determinado verbo' },
    { label: '¿Es regular o irregular?', value: Actions.TYPE, description: 'Podrás saber de qué tipo es un determinado verbo' },
    { label: 'Revisar gramática', value: Actions.CHECK, description: 'Revisión para un pequeño fragmento de texto' },
    { label: 'Ejemplos de uso', value: Actions.USE, description: 'Sabrás cuando usar un determinado verbo' },
]

export const Inputs = () => {
    const { isWriting } = useStore()
    const { select, inputText, setInputText, setSelect } = useInputStore()
    const { handleAction } = useInputAction({})

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
                        <div className="flex gap-3">
                            <button onClick={() => generateAudio(inputText)} className="text-default fill-primary hover:fill-default rounded-full">
                                <SpeakerWaveIcon />
                            </button>
                            <button disabled={isWriting} className="transition-colors delay-75 text-default fill-primary hover:fill-default rounded-full" onClick={handleAction}>
                                {
                                    isWriting ? (
                                        <EllipsisIcon />
                                    ) : (
                                        <SendIcon />
                                    )
                                }
                            </button>
                        </div>
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