import React from 'react'

import * as S from './styles'

type BoxBottomProps = {
  children: React.ReactNode
}

const BoxBottom = ({ children, ...props }: BoxBottomProps) => {
  return <S.Wrapper {...props}>{children}</S.Wrapper>
}

export default BoxBottom
