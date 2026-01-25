import { Link } from 'react-router'

type Props = {
  path: string
  children: React.ReactNode
}

const Anchor = ({ path, children }: Props) => {
  const currentPath = window.location.pathname

  return (
    <Link
      to={path}
      className={`text-white w-full p-2 rounded-full pl-4 gap-2 flex flex-row ${
        currentPath === path ? 'bg-teal-600 hover:bg-teal-500' : 'bg-transparent hover:bg-slate-800'
      }`}
    >
      {children}
    </Link>
  )
}

export { Anchor }
