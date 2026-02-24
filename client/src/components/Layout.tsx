import type { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { ToastContainer } from 'react-toastify'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className='flex flex-row gap-2'>
        <Sidebar />
        <main className='p-4 w-full h-full'>{children}</main>
      </div>
      <ToastContainer />
    </>
  )
}

export { Layout }
