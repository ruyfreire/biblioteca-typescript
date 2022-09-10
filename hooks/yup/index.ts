import { setLocale } from 'yup'

const useLocaleYup = () => {
  setLocale({
    mixed: {
      notType: 'O campo precisa ser do tipo [${type}]',
      required: 'Campo obrigatório'
    },
    object: {
      noUnknown: 'Campo desconhecido'
    },
    string: {
      min: 'Mínimo de ${min} caracteres',
      max: 'Máximo de ${max} caracteres',
      email: 'E-mail inválido',
      url: 'URL inválida',
      uuid: 'uuid inválido',
      trim: 'Remova espaços extras'
    },
    array: {
      min: 'Deve ter no mínimo ${min} item(ns)'
    }
  })
}

export default useLocaleYup
