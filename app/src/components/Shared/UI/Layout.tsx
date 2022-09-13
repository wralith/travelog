import { ReactNode } from 'react'
import MainNavigation from '../../Navigation/MainNavigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <MainNavigation>
      <main className="p-2">{children}</main>
      <ToastContainer />
    </MainNavigation>
  )
}

export default Layout
