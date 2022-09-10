import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function FormPageWrapper({ children }: Props) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex-col mt-20 m-auto w-full md:w-1/2 xl:w-1/3">{children}</div>
    </div>
  )
}

export default FormPageWrapper
