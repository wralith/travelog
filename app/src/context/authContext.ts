import { createContext } from 'react'

interface AuthContextType {
  isLoggedIn: boolean
  loggedUser: null | string
  token: null | string
  login: (username: string, token: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  loggedUser: null,
  token: null,
  login: () => {},
  logout: () => {}
})
