import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Backdrop from './components/Shared/UI/Backdrop'
import Layout from './components/Shared/UI/Layout'
import { Home, NewPlace, NotFound, UserPlaces, Users } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId/places" element={<UserPlaces />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
