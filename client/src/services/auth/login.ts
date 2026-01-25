type Props = {
  email: string
  password: string
}

const loginService = async ({ email, password }: Props) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })

  const data = await response.json()
  return { data, code: response.status }
}

export { loginService }
