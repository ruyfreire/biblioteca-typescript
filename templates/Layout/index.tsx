import React, { ReactNode } from 'react'

import * as S from './styles'

export type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <S.Container {...props}>
      <main>{children}</main>
    </S.Container>
  )
}

export default Layout
