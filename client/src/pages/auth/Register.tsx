import { registerService } from '../../services/auth/register'
import { Link } from 'react-router'
import { useState } from 'react'

import { ToastContainer, toast, Bounce } from 'react-toastify'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'

const INITIAL_DATA = {
  email: '',
  password: ''
}

const Register = () => {
  const [data, setData] = useState(INITIAL_DATA)

  const onSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const { data: responseAPI, status } = await registerService({ email: data.email, password: data.password })

    if ('message' in responseAPI && status === 201) {
      const { message } = responseAPI
      toast.success(message)
      setData(INITIAL_DATA)
    } else if ('errors' in responseAPI) {
      const { errors, message } = responseAPI
      toast.error(message)
      Object.entries(errors).forEach(([key, value]) => toast.error(`${key}: ${value}`))
    } else {
      const { message } = responseAPI
      toast.error(message)
    }
  }

  return (
    <>
      <main className='w-dvw h-dvh p-4 flex justify-center items-center bg-gray-300'>
        <section className='bg-white p-6 min-w-md flex flex-col gap-4 justify-center items-center rounded-xl'>
          <div className='flex flex-col gap-2 justify-center items-center'>
            <Logo />
            <h1 className='text-2xl font-bold'>MiBalance</h1>
            <p>Completa tus datos para comenzar</p>
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
              placeholder='********'
              name='password'
              minLength={8}
              maxLength={255}
              onChange={event => setData({ ...data, [event.target.name]: event.target.value })}
              value={data.password}
            />
            <Button type='submit'>
              <span>Crear cuenta</span>
            </Button>
          </form>
          <p>
            <span>¿Ya tienes cuenta? </span>
            <Link to='/auth/login' className='text-teal-600 hover:text-teal-500'>
              Inicia sesión
            </Link>
          </p>
        </section>
      </main>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        transition={Bounce}
      />
    </>
  )
}

export { Register }
