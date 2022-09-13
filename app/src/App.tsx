import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Shared/UI/Layout'
import { AuthContext } from './context/authContext'
import { Home, Login, NewPlace, NotFound, Register, UpdatePlace, UserPlaces, Users } from './pages'

const queryClient = new QueryClient()

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loggedUser, setLoggedUser] = useState<string | null>(null)

  const login = useCallback((username: string) => {
    setLoggedUser(username)
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    setLoggedUser(null)
    setIsLoggedIn(false)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ isLoggedIn, login, logout, loggedUser }}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:username/places" element={<UserPlaces />} />
              <Route path="*" element={<NotFound />} />
              {isLoggedIn && (
                <>
                  <Route path="/places/:placeId/update" element={<UpdatePlace />} />
                  <Route path="/places/new" element={<NewPlace />} />
                </>
              )}
              {!isLoggedIn && (
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
