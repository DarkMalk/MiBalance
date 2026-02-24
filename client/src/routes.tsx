import { createBrowserRouter } from 'react-router'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { protectedLoader } from './loaders/protectedLoader'

const routes = createBrowserRouter([
  {
    path: '/',
    Component: Dashboard,
    loader: protectedLoader
  },
  {
    path: '/auth/login',
    Component: Login
  },
  {
    path: 'auth/register',
    Component: Register
  }
])

export { routes }
