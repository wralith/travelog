import { useCallback, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Shared/UI/Layout'
import { AuthContext } from './context/authContext'
import { Home, Login, NewPlace, NotFound, Register, UpdatePlace, UserPlaces, Users } from './pages'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(() => {
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false)
  }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:userId/places" element={<UserPlaces />} />
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
  )
}

export default App
