import {create} from 'zustand'

interface searchState {
    keywords: string,
    setKeywords: (keywords: string) => void,
}

export const useSearchStore = create<searchState>((set) => ({
    keywords: '',
    setKeywords: (keywords: string) => set({keywords}),
}))