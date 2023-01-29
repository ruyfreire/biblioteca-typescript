import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'

import Link from 'next/link'

import { clsx } from 'clsx'

import { Logo } from '@/components'

const menu = [
  {
    path: '/',
    name: 'Início',
    icon: null
  },
  {
    path: '/autores',
    name: 'Autores',
    icon: null
  },
  {
    path: '/livros',
    name: 'Livros',
    icon: null
  }
]

export function Nav() {
  const [showNav, setShowNav] = useState(false)

  return (
    <nav className=" flex h-[64px] justify-between gap-4 bg-cyan-800 p-2">
      <Logo />

      <button
        className="hidden items-center justify-center px-2 text-3xl text-white max-sm:flex"
        onClick={() => setShowNav(!showNav)}
      >
        <MdMenu />
      </button>

      <ul
        className={
          'flex flex-grow items-center justify-end gap-2 bg-cyan-800 transition-all max-sm:absolute max-sm:top-0 max-sm:mt-[64px] max-sm:h-screen max-sm:min-w-[50%] max-sm:flex-col max-sm:items-end max-sm:justify-start ' +
          clsx({ 'max-sm:right-0': showNav, 'max-sm:-right-full': !showNav })
        }
      >
        {menu.map((item) => (
          <li key={item.path} className="max-sm:w-full">
            <Link
              href={item.path}
              className="flex w-full cursor-pointer justify-end py-1 px-2 font-bold uppercase text-white transition-all hover:bg-teal-600 max-sm:px-4 max-sm:text-end sm:rounded"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
