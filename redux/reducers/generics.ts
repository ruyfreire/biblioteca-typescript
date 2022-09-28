import { createReducer, createAction } from '@reduxjs/toolkit'
import { AlertProps, GenericState } from 'types'

export const genericActions = {
  errorApi: createAction<unknown>('generic/API_ERROR'),
  openAlert: createAction<AlertProps>('generic/OPEN_ALERT'),
  closeAlert: createAction('generic/CLOSE_ALERT')
}

const initialState: GenericState = {
  apiErrors: [],
  alert: {
    show: false,
    timer: 3,
    children: '',
    variant: 'success'
  }
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(genericActions.errorApi, (state, action) => {
      state.apiErrors.push(action.payload)
    })
    .addCase(genericActions.openAlert, (state, action) => {
      state.alert = {
        ...action.payload,
        show: true
      }
    })
    .addCase(genericActions.closeAlert, (state) => {
      state.alert = initialState.alert
    })
})
