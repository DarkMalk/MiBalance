type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = ({ label, ...props }: Props) => {
  return (
    <label className='flex flex-col gap-1 w-full'>
      <span>{label}</span>
      <input
        {...props}
        className='w-full rounded-full p-2 pl-4 border border-gray-300 focus:border-teal-600 focus:outline-teal-600/50 focus:outline-2'
      />
    </label>
  )
}

export { Input }
