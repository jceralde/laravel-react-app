import { ReactNode } from 'react'

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div className="sticky left-0 top-0 flex h-14 w-full items-center justify-between border-b border-gray-200 border-dashed bg-opacity-30 bg-clip-padding px-4 backdrop-blur-md backdrop-filter dark:border-gray-50/5">
      {children}
    </div>
  )
}

export default Header
