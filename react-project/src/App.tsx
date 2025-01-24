import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './layout/Layout'
import Home from './pages/Home'
import HCharge from './pages/HCharge'



import { ThemeProvider } from '@/components/theme-provider'

const App = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="hcharge" element={<HCharge />} />
          </Route>
          {/* 
          <Route path="/other" element={<Layout2 />}>
            <Route index element={<Home />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
