const DashboardIcon = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    className='icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard'
    {...props}
  >
    <path d='M0 0h24v24H0z' stroke='none' />
    <path d='M5 4h4a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1m0 12h4a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2a1 1 0 011-1m10-4h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6a1 1 0 011-1m0-8h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V5a1 1 0 011-1' />
  </svg>
)

export { DashboardIcon }
