import React from 'react'

import * as S from './styles'

type FlexFormProps = React.FormHTMLAttributes<HTMLFormElement>

const FlexForm = ({ children, ...props }: FlexFormProps) => {
  return <S.Form {...props}>{children}</S.Form>
}

export default FlexForm
