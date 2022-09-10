import * as yup from 'yup'

import { validatorsTests } from './validatorsTests'

const validators = {
  onlyText: yup
    .string()
    .required()
    .test(
      'only-text',
      'Campo não pode conter números',
      validatorsTests.onlyText
    ),
  onlyNumber: yup
    .string()
    .required()
    .test(
      'only-number',
      'Campo só pode conter números',
      validatorsTests.onlyNumber
    ),
  fullName: yup
    .string()
    .strict()
    .required()
    .test('only-text', 'Não pode conter número', validatorsTests.onlyText)
    .test(
      'first-name',
      'Nome deve conter no mínimo 2 caracteres',
      validatorsTests.firstName
    )
    .test(
      'last-name',
      'Sobrenome deve conter no mínimo 2 caracteres',
      validatorsTests.lastName
    )
    .test(
      'no-special-char',
      'Não digite caracteres especiais',
      validatorsTests.noSpecialChar
    )
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .trim()
}

export default validators
