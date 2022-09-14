import { ReactNode } from 'react'

interface Props {
  children: ReactNode | string
  className?: string
}

function Card({ children, className }: Props) {
  return (
    <div
      className={`flex flex-row rounded-lg overflow-hidden pb-6 gap-5 items-center bg-base-200 hover:bg-base-300 shadow-md shadow-black/20 ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
