import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about/:id?" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
