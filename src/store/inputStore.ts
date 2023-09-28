import { create } from 'zustand'
import { Actions } from '@/lib'

type Store = {
    select: Actions | null;
    inputText: string; 
    setSelect: (value: Actions) => void;
    setInputText: (value: string) => void;
}

export const useInputStore = create<Store>()((set) => ({
    select: null,
    inputText: "",
    setSelect: (value) => set((state) => ({ ...state, select: value })),
    setInputText: (value) => set((state) => ({ ...state, inputText: value })),
}))