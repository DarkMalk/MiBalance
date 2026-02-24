type Props = {
  email: string
  password: string
}

const registerService = async ({ email, password }: Props): Promise<{ data: RegisterResponse; status: number }> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include'
  })

  const data = await response.json()
  return { data, status: response.status }
}

export { registerService }
