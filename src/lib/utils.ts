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
    [Actions.TIMES]: `Proporciona la forma base, pasado y participio del verbo "${value}" únicamente si se trata de un verbo en inglés.`,
    [Actions.TYPE]: `¿El verbo "${value}" es irregular o regular?. Verifica que se trate de un verbo en inglés.`,
    [Actions.CHECK]: `¿El texto "${value}" tiene algún error gramatical en inglés?`,
    [Actions.USE]: `Proporciona una descripción corta y 3 ejemplos de uso para este término en inglés "${value}". Verifica que "${value}" se trate de un término en inglés.`,
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