import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'

import Link from 'next/link'

import { clsx } from 'clsx'

import { Logo } from '@/components'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

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

export function Header() {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <header className=" z-20 flex h-[64px] justify-between gap-4 bg-cyan-800 p-2">
        <Logo />

        <AccessibleIcon.Root label="Abrir menu cabeçalho">
          <button
            className="hidden items-center justify-center px-2 text-3xl text-white max-sm:flex"
            onClick={() => setShowNav(!showNav)}
          >
            <MdMenu />
          </button>
        </AccessibleIcon.Root>

        <NavigationMenu.Root
          className={
            'relative flex flex-grow justify-end gap-2 bg-cyan-800 transition-all max-sm:absolute max-sm:top-0 max-sm:mt-[64px] max-sm:min-w-[50%] max-sm:h-calc-[64px] [&_div]:w-full ' +
            clsx({
              'max-sm:right-0': showNav,
              'max-sm:-right-full max-sm:hidden': !showNav
            })
          }
        >
          <NavigationMenu.List className="flex h-full w-full flex-grow items-center justify-end gap-2 max-sm:flex-col max-sm:items-end max-sm:justify-start">
            {menu.map((item) => (
              <NavigationMenu.Item key={item.path} className="max-sm:w-full">
                <NavigationMenu.Link asChild>
                  <Link
                    href={item.path}
                    className="flex w-full cursor-pointer justify-end py-1 px-2 font-bold uppercase text-white transition-all hover:bg-teal-600 max-sm:px-4 max-sm:text-end sm:rounded"
                  >
                    {item.name}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>

          <NavigationMenu.Viewport />
        </NavigationMenu.Root>
      </header>

      <div
        onClick={() => setShowNav(!showNav)}
        className={
          'absolute inset-0 z-10 bg-black/40 sm:hidden ' +
          clsx({ hidden: !showNav })
        }
      />
    </>
  )
}
