import { Link, Outlet } from 'react-router'

import { Button } from '@/components/ui/button'

const Layout = () => {
  return (
    <div>
      <header style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <nav>
          <Link to="/" style={{ marginRight: '1rem' }}>
            Home
          </Link>
          <Link to="/about">
            <Button>About</Button>
          </Link>
        </nav>
      </header>
      <main style={{ padding: '1rem' }}>
        <Outlet /> {/* Render the child route here */}
      </main>
      <footer style={{ padding: '1rem', backgroundColor: '#f0f0f0', marginTop: '2rem' }}>Footer Content</footer>
    </div>
  )
}

export default Layout
