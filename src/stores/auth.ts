import { create } from 'zustand';

type AuthStore = {
    isAuthenticated: boolean;
    token: string;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
    setToken: (token: string) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
    isAuthenticated: false,
    token: '',
    setIsAuthenticated: () => set({ isAuthenticated: true }),
    setToken: (token) => set({token: token })
}))

