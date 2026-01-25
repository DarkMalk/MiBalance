import { create } from 'zustand'

type UserStore = {
  user: User | null
  setUser: (user: User | null) => void
}

const userStore = create<UserStore>(set => ({
  user: null,
  setUser: user => set({ user })
}))

export { userStore }
