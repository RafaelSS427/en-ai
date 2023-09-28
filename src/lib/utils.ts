import { Actions } from './constants'
import { propmts } from '@/data'

const { propmtSystemCheck, propmtSystemTimes, propmtSystemType, propmtSystemUse } = propmts

export const getInstructions = (option: Actions) => {
    switch (option) {
        case Actions.TIMES:
            return propmtSystemTimes;

        case Actions.TYPE:
            return propmtSystemType;

        case Actions.CHECK:
            return propmtSystemCheck;

        case Actions.USE:
            return propmtSystemUse;

        default:
            throw new Error('Debes proporcionar una acción!')
    }
}

export const getPrompt = (value: string) => ({
    [Actions.TIMES]: `¿Podrías proporcionarme la forma base, pasado y participio del verbo "${value}"?. Verifica que se trate de un verbo en inglés.`,
    [Actions.TYPE]: `¿El verbo "${value}" es irregular o regular?. Verifica que se trate de un verbo en inglés.`,
    [Actions.CHECK]: `¿Podrías revisar si existe algún error gramátical en el texto que te pasaré a continuación? Text: "${value}". Verifica que se trate de un texto en inglés.`,
    [Actions.USE]: `¿Podrías proporcionarme una descripción corta y 3 ejemplos de uso para este verbo "${value}"? Verifica que se trate de un verbo en inglés.`,
})

export const getInfoInput = {
    [Actions.TIMES]: {
        label: 'Introduce un verbo',
        placeholder: 'Ingresar verbo...'
    },
    [Actions.TYPE]: {
        label: 'Introduce un verbo',
        placeholder: 'Ingresar verbo...'
    },
    [Actions.CHECK]: {
        label: 'Introduce un texto a revisar',
        placeholder: 'Ingresa tu texto...'
    },
    [Actions.USE]: {
        label: 'Introduce un verbo',
        placeholder: 'Ingresar verbo...'
    },
    default: {
        label: "",
        placeholder: "Esperando acción..."
    }
}