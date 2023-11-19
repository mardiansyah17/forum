import {create} from 'zustand'

interface ForumState {
    forums: ForumInterface[];
    loading: boolean;
    setForums: (forum: ForumInterface[]) => void;
    setLoading: (loading: boolean) => void;
}

export const useForumStore = create<ForumState>((set) => ({
    forums: [],
    loading: false,
    setForums: (forum) => set(() => ({forums: forum})),
    setLoading: (loading: boolean) => set(() => ({loading: loading}))
}))