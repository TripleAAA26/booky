import { create } from 'zustand'
import { User } from '../../types.ts'
import { persist } from 'zustand/middleware'

interface useAuthProps {
    isAuthenticated: boolean
    loggedUser: User | null
    login: (userData: User) => void
    logout: () => void
}

const useAuth = create<useAuthProps>()(persist((set) => ({
    isAuthenticated: false,
    loggedUser: null,
    login: (userData) => set({ isAuthenticated: true, loggedUser: userData }),
    logout: () => set({ isAuthenticated: false, loggedUser: null }),
}), { name: 'store' }))

export default useAuth