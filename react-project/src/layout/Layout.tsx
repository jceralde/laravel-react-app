import { Link, NavLink, Outlet } from 'react-router'

import Header from '@/components/header/Header'
import Logo from '@/components/header/Logo'
import { ModeToggle } from '@/components/mode-toggle'

const Layout = () => {
  return (
    <div className='relative flex flex-1 flex-col'>
      <Header>
        <Link to="/">
          <Logo />
        </Link>
        <ModeToggle />
      </Header>

      <div className='px-4 flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10'>
        <nav className='p-4 overflow-auto flex flex-col gap-4 shrink-0 min-h-[calc(100svh-56px)] border-r border-gray-100'>
          <NavLink
            to='/hcharge'
          >
            HCharge
          </NavLink>
        </nav>
        <main className='py-4'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
