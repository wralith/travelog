import { MouseEventHandler } from 'react'

interface Props {
  onClick: MouseEventHandler
}

function Backdrop({ onClick }: Props) {
  return <div onClick={onClick} className="fixed top-0 left-0 w-full backdrop-blur-sm h-full bg-primary/30 z-50 "></div>
}

export default Backdrop
