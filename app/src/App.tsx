import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Shared/UI/Layout'
import { Home, NewPlace, NotFound, UpdatePlace, UserPlaces, Users } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId/places" element={<UserPlaces />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/places/:placeId/update" element={<UpdatePlace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
