import React, { ReactNode } from 'react'

import * as S from './styles'

type SectionProps = {
  children: ReactNode
}

const Section = ({ children }: SectionProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Section
