import React, { ReactNode } from 'react'

import { Toast } from 'ui-app'

import { useAppSelector } from 'hooks'

import * as S from './styles'

export type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children, ...props }: LayoutProps) => {
  const { alert } = useAppSelector(({ generics }) => generics)

  return (
    <S.Container {...props}>
      <div className="main">{children}</div>
      <Toast {...alert} />
    </S.Container>
  )
}

export default Layout
