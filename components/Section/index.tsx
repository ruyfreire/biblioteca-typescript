import React, { ReactNode } from 'react'

import * as S from './styles'

type SectionProps = {
  children: ReactNode
}

const Section = ({ children, ...props }: SectionProps) => {
  return <S.Wrapper {...props}>{children}</S.Wrapper>
}

export default Section
