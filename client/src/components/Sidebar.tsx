import { userStore } from '../store/userStore'

// Icons
import { DashboardIcon } from './icons/Dashboard'
import { ReceiptIcon } from './icons/Receipt'
import { LogoutIcon } from './icons/Logout'
import { UserIcon } from './icons/User'
import { TagIcon } from './icons/Tag'

// Components
import { Divisor } from './Divisor'
import { Anchor } from './Anchor'
import { Logo } from './Logo'

const Sidebar = () => {
  const { user } = userStore()

  return (
    <aside className='flex flex-col p-6 gap-8 w-90 h-dvh bg-slate-900'>
      <div className='flex flex-row gap-2'>
        <Logo />
        <div className='flex flex-col'>
          <span className='text-lg font-semibold text-white'>MiBalance</span>
          <p className='text-xs text-white/60'>Finanzas Personales</p>
        </div>
      </div>
      <nav className='flex flex-col gap-2 h-full'>
        <span className='text-xs font-semibold text-white/60'>MENÚ PRINCIPAL</span>
        <Anchor path='/'>
          <DashboardIcon />
          <span>Dashboard</span>
        </Anchor>
        <Anchor path='/categories'>
          <TagIcon />
          <span>Categorías</span>
        </Anchor>
        <Anchor path='/transactions'>
          <ReceiptIcon />
          <span>Transacciones</span>
        </Anchor>
      </nav>
      <Divisor />
      <div className='flex flex-col gap-2 text-white/80'>
        <div className='flex ml-2 flex-row gap-2'>
          <UserIcon />
          <p>{user?.email}</p>
        </div>
        <button className='flex flex-row gap-1 justify-left p-2 items-center hover:bg-slate-600 rounded-full hover:cursor-pointer'>
          <LogoutIcon />
          Cerrar sesión
        </button>
      </div>
    </aside>
  )
}

export { Sidebar }
