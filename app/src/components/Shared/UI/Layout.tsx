import { ReactNode } from 'react'
import MainNavigation from '../../Navigation/MainNavigation'

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <MainNavigation>
      <main className='p-2'>{children}</main>
    </MainNavigation>
  )
}

export default Layout
