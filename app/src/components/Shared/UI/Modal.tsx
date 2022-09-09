import { FormEventHandler, ReactNode } from 'react'
import { createPortal } from 'react-dom'

import Backdrop from './Backdrop'
import Card from './Card'

interface OverlayProps {
  content: ReactNode | string
  title: ReactNode | string
  footer?: ReactNode | string
  onSubmit?: FormEventHandler<HTMLFormElement>
}

interface Props {
  backdrop: boolean
  onCancel: any
  childProps: OverlayProps
}

function Modal(props: Props) {
  return (
    <div className="w-full h-full fixed text-center">
      {props.backdrop && <Backdrop onClick={props.onCancel} />}
      <ModalOverlay {...props.childProps} />
    </div>
  )
}

function ModalOverlay(props: OverlayProps) {
  const content = (
    <Card className="z-[90] flex-col top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 text-center">
      <header className="text-xl font-bold">{props.title}</header>
      <div>{props.content}</div>
      <footer>{props.footer}</footer>
    </Card>
  )
  return createPortal(content, document.getElementById('modal-root')!)
}

export default Modal
