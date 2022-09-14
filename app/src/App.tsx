import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useCallback, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Shared/UI/Layout'
import { AuthContext } from './context/authContext'
import { Home, Login, NewPlace, NotFound, Register, UpdatePlace, UserPlaces, Users } from './pages'

const queryClient = new QueryClient()

function App() {
  const [token, setToken] = useState<string | null>(null)
  const [loggedUser, setLoggedUser] = useState<string | null>(null)

  const login = useCallback((username: string, token: string) => {
    setLoggedUser(username)
    localStorage.setItem('userData', JSON.stringify({ username: username, token: token }))
    setToken(token)
  }, [])

  const logout = useCallback(() => {
    setLoggedUser(null)
    setToken(null)
    localStorage.removeItem('userData')
  }, [])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData') as string)
    if (storedData && storedData.token) {
      login(storedData.username, storedData.token)
    }
  }, [login])

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ isLoggedIn: !!token, token, login, logout, loggedUser }}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:username/places" element={<UserPlaces />} />
              <Route path="*" element={<NotFound />} />
              {token && (
                <>
                  <Route path="/places/:placeId/update" element={<UpdatePlace />} />
                  <Route path="/places/new" element={<NewPlace />} />
                </>
              )}
              {!token && (
                <>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </>
              )}
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthContext.Provider>
    </QueryClientProvider>
  )
}

export default App
