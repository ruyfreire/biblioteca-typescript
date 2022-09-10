import { Author } from 'types'
import { validators } from 'utils'
import * as yup from 'yup'

const validationSchema: yup.SchemaOf<Author> = yup.object({
  name: validators.fullName
})

export default validationSchema
