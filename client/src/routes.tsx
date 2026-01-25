import { createBrowserRouter } from 'react-router'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/auth/login'

const routes = createBrowserRouter([
  {
    path: '/',
    Component: Dashboard
  },
  {
    path: '/auth/login',
    Component: Login
  }
])

export { routes }
