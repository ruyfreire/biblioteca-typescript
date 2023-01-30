import React from 'react'

import { Header } from '../Header'
import { Main } from '../Main'

type LayoutProps = {
  children: React.ReactNode
}

export function Layout(props: LayoutProps) {
  return (
    <div className="grid h-screen grid-cols-1 grid-rows-[64px_1fr]">
      <Header />

      <Main>{props.children}</Main>
    </div>
  )
}
