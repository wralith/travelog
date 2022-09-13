import { IconMenu2 } from '@tabler/icons'
import { ReactNode } from 'react'

import BrandLogo from '../Shared/UI/BrandLogo'
import NavbarLinks from './NavbarLinks'

interface Props {
  children: ReactNode
}

function MainNavigation({ children }: Props) {
  return (
    <div className="drawer">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="nav-drawer" className="btn btn-square btn-ghost">
              <IconMenu2 />
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <BrandLogo />
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <NavbarLinks />
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          <NavbarLinks />
        </ul>
      </div>
    </div>
  )
}

export default MainNavigation
