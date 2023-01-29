import React from 'react'

import { Main } from '../Main'
import { Nav } from '../Nav'

type LayoutProps = {
  children: React.ReactNode
}

export function Layout(props: LayoutProps) {
  return (
    <div className="grid h-screen grid-cols-1 grid-rows-[64px_1fr]">
      <Nav />

      <Main>{props.children}</Main>
    </div>
  )
}
