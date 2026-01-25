type Props = {
  onClick?: () => void
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ onClick, children, ...props }: Props) => {
  return (
    <button
      onClick={onClick}
      className='text-white w-full p-2 rounded-full pl-4 gap-2 flex flex-row bg-slate-900 hover:bg-slate-800 justify-center items-center hover:cursor-pointer'
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }
