const ReceiptIcon = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      className='icon icon-tabler icons-tabler-outline icon-tabler-receipt-dollar'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16l-3-2-2 2-2-2-2 2-2-2-3 2' />
      <path d='M14.8 8A2 2 0 0013 7h-2a2 2 0 100 4h2a2 2 0 110 4h-2a2 2 0 01-1.8-1M12 6v10' />
    </svg>
  )
}

export { ReceiptIcon }
