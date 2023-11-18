import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export const useForumStore = create(
    persist(
        (set, get) => ({
            forums: [],
        }),
        {
            name: 'forum-store',
        }
    )
);