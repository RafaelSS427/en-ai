import { create } from 'zustand'

type Store = {
  message: string,
  isWriting: boolean;
  writeMessage: (message: string) => void;
  setIsWriting: (value: boolean) => void;
}

export const useStore = create<Store>()((set) => ({
    message: "",
    isWriting: false,
    writeMessage: (message) => set((state) => ({ ...state, message })),
    setIsWriting: (value) => set((state) => ({ ...state, isWriting: value })),
}))