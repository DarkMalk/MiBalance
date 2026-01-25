import { Link } from 'react-router'
import { useState } from 'react'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { loginService } from '../../services/auth/login'

const INITIAL_DATA = {
  email: '',
  password: ''
}

const Login = () => {
  const [data, setData] = useState(INITIAL_DATA)

  const onSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const responseAPI = await loginService({ email: data.email, password: data.password })

    console.log(responseAPI)
  }

  return (
    <main className='w-dvw h-dvh p-4 flex justify-center items-center bg-gray-300'>
      <section className='bg-white p-6 min-w-md flex flex-col gap-4 justify-center items-center rounded-xl'>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <Logo />
          <h1 className='text-2xl font-bold'>MiBalance</h1>
          <p>Ingresa a tu cuenta para continuar</p>
        </div>
        <form onSubmit={onSubmit} className='flex flex-col gap-4 w-full'>
          <Input
            label='Correo Electrónico'
            type='email'
            placeholder='your@email.com'
            name='email'
            minLength={5}
            maxLength={255}
            onChange={event => setData({ ...data, [event.target.name]: event.target.value })}
            value={data.email}
          />
          <Input
            label='Contraseña'
            type='password'
            placeholder='your@email.com'
            name='password'
            minLength={8}
            maxLength={255}
            onChange={event => setData({ ...data, [event.target.name]: event.target.value })}
            value={data.password}
          />
          <Button type='submit'>
            <span>Iniciar sesión</span>
          </Button>
        </form>
        <p>
          <span>¿No tienes cuenta? </span>
          <Link to='/auth/register' className='text-teal-600 hover:text-teal-500'>
            Regístrate
          </Link>
        </p>
      </section>
    </main>
  )
}

export { Login }
