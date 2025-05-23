export type XIconProps = {
  classNameStyling: string
}

const XIcon: React.FC<XIconProps> = ({ classNameStyling }) => {
  return (
    <svg className={classNameStyling} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
    </svg>
  )
}

export default XIcon
