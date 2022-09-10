import * as yup from 'yup'

type validatorsTestsType = {
  onlyText: yup.TestFunction<string | undefined>
  onlyNumber: yup.TestFunction<string | undefined>
  firstName: yup.TestFunction<string | undefined>
  lastName: yup.TestFunction<string | undefined>
  noSpecialChar: yup.TestFunction<string | undefined>
}

export const validatorsTests: validatorsTestsType = {
  onlyText: (value) => !!value && /^[^\d]+$/.test(value),
  onlyNumber: (value) => !!value && /^[\d]+$/.test(value),
  firstName: (value) => {
    if (value) {
      const splitName = value.split(' ')

      return splitName[0]?.length >= 2
    }
    return false
  },
  lastName: (value) => {
    if (value) {
      const splitName = value.split(' ')

      return splitName[1]?.length >= 2
    }
    return false
  },
  noSpecialChar: (value) => !!value && /^[a-z áàâãéèêíïóôõöúçñ]+$/i.test(value)
}
