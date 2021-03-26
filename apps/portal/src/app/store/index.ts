import create from 'zustand'
import { uid } from 'react-uid'
import { UserRegister, AppState } from './interface'

export const useAppStore = create((set) => ({
  user: {},

  // Auth
  setUser: (newUser: UserRegister) =>
    set((state: AppState) => ({
      user: newUser,
    })),

  // login: (by: UserLogin) => void;
  logout: () =>
    set((state: AppState) => ({
      user: {},
    })),
}))
