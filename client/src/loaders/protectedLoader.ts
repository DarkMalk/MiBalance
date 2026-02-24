import { redirect } from 'react-router'
import { userStore } from '../store/userStore'

const protectedLoader = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/profile`, { credentials: 'include' })

  if (!response.ok) {
    throw redirect('/auth/login')
  }

  const user = await response.json()
  userStore.getState().setUser(user)

  return null
}

export { protectedLoader }
