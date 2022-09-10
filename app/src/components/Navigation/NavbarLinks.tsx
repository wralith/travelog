import { IconApps, IconHome, IconLogin, IconUser, IconUserPlus } from '@tabler/icons'
import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

interface MenuItem {
  title: string
  link: string
  icon?: ReactElement
}

const iconSize = 20

const menuItems: MenuItem[] = [
  { title: 'Home', link: '/', icon: <IconHome size={iconSize} /> },
  { title: 'Users', link: '/users', icon: <IconUser size={iconSize} /> },
  { title: 'New Place', link: '/places/new', icon: <IconApps size={iconSize} /> },
  { title: 'Login', link: '/login', icon: <IconLogin size={iconSize} /> },
  { title: 'Register', link: '/register', icon: <IconUserPlus size={iconSize} /> }
]

function NavbarLinks() {
  return (
    <>
      {menuItems.map((item) => (
        <li key={item.title}>
          <NavLink to={item.link} className="flex items-stretch gap-2">
            <div>{item.icon ? item.icon : null}</div>
            <p>{item.title}</p>
          </NavLink>
        </li>
      ))}
    </>
  )
}

export default NavbarLinks
