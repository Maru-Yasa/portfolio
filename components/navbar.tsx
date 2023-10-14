import React from 'react'
import { ThemeToggler } from './theme-toggler'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="h-[68px] bg-transparent backdrop-blur bg-opacity-5 top-0 left-0 right-0 fixed flex items-center z-10 w-full" style={{ borderBottom: '1px solid hsl(240 3.7% 15.9%)' }}>
    <div className="flex container px-8 gap-8">
      <a href="/" className="font-semibold flex gap-2 items-center text-[17px]">
        maruyasa
      </a>
      <div className="flex justify-end container">
        <nav className='space-x-4'>
          <Link href="/links">
            Links
          </Link>
          <Link href="/projects">
            Projects
          </Link>
        </nav>
      </div>
    </div>
  </nav>
  )
}

export default Navbar