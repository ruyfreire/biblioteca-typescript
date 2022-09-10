import { useRouter } from 'next/router'
import React from 'react'

import { Button, Grid, Input } from 'ui-app'

import { BoxBottom, FlexForm, Header } from 'components'
import { useFormik } from 'formik'
import { useAppDispatch } from 'hooks'
import { authorActions } from 'redux/reducers/author'
import routes from 'utils/routes'

import validationSchema from './validationSchema'

const Cadastrar = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      dispatch(
        authorActions.createAuthor({
          name: values.name
        })
      )
    }
  })

  return (
    <>
      <Header
        title={routes.autoresCadastrar.name}
        header={routes.autoresCadastrar.name}
        backButton={() => router.push(routes.autores.path)}
      />

      <FlexForm onSubmit={formik.handleSubmit}>
        <Grid container flexDirection="column" gap={16}>
          <Grid item>
            <Input
              label="Nome do autor"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && formik.errors.name}
              placeholder="Digite o nome do autor"
              fullWidth
            />
          </Grid>
        </Grid>

        <BoxBottom>
          <Button
            type="button"
            variant="secondary"
            onClick={() => router.push(routes.autores.path)}
          >
            Cancelar
          </Button>

          <Button type="submit">Cadastrar</Button>
        </BoxBottom>
      </FlexForm>
    </>
  )
}

export default Cadastrar
