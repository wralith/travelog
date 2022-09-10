import { IconApps, IconHome, IconLogin, IconLogout, IconUser, IconUserPlus } from '@tabler/icons'
import { ReactElement, useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

interface MenuItem {
  title: string
  link: string
  show: 'loggedIn' | 'notLoggedIn' | 'always'
  icon?: ReactElement
  onClick?: Function
}

const iconSize = 20

let menuItems: MenuItem[] = [
  { title: 'Home', link: '/', show: 'always', icon: <IconHome size={iconSize} /> },
  { title: 'Users', link: '/users', show: 'always', icon: <IconUser size={iconSize} /> },
  { title: 'New Place', link: '/places/new', show: 'loggedIn', icon: <IconApps size={iconSize} /> },
  { title: 'Login', link: '/login', show: 'notLoggedIn', icon: <IconLogin size={iconSize} /> },
  { title: 'Register', link: '/register', show: 'notLoggedIn', icon: <IconUserPlus size={iconSize} /> }
]

function NavbarLinks() {
  const [filteredItems, setFilteredItems] = useState(menuItems)
  const auth = useContext(AuthContext)

  useEffect(() => {
    if (auth.isLoggedIn) {
      setFilteredItems(menuItems.filter((item) => item.show === 'loggedIn' || item.show === 'always'))
    }
    if (!auth.isLoggedIn) {
      setFilteredItems(menuItems.filter((item) => item.show === 'notLoggedIn' || item.show === 'always'))
    }
  }, [auth.isLoggedIn])

  return (
    <>
      {filteredItems.map((item) => (
        <li key={item.title}>
          <NavLink to={item.link} className="flex items-stretch gap-2">
            <div>{item.icon ? item.icon : null}</div>
            <p>{item.title}</p>
          </NavLink>
        </li>
      ))}
      {auth.isLoggedIn && (
        <li key="Logout" onClick={() => auth.logout()}>
          <a className="flex items-stretch gap-2">
            <div>
              <IconLogout size={iconSize} />{' '}
            </div>
            <p>Logout</p>
          </a>
        </li>
      )}
    </>
  )
}

export default NavbarLinks
