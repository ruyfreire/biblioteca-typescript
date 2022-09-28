import {
  createListenerMiddleware,
  isFulfilled,
  isRejected
} from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { genericActions } from '../reducers/generics'

const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  actionCreator: genericActions.openAlert,
  effect: async (action, thunk) => {
    const { timer = 3 } = action.payload

    thunk.cancelActiveListeners()
    await thunk.delay(timer * 1000)

    thunk.dispatch(genericActions.closeAlert())
  }
})

// listenerMiddleware.startListening({
//   matcher: isRejected,
//   effect: (action, thunk) => {
//     console.log('reject', action)
//     console.log('error', action.error)
//     if (action.payload instanceof AxiosError) {
//       const { response, request, message } = action.payload
//       thunk.dispatch(genericActions.errorApi(response || request || message))
//     }
//   },
//   onError: (error) => {
//     console.log('erro', error)
//   }
// })

listenerMiddleware.startListening({
  matcher: isFulfilled,
  effect: (action, thunk) => {
    console.log('filled', action)
    // if (action.payload instanceof AxiosError) {
    //   const { response, request, message } = action.payload
    //   thunk.dispatch(genericActions.errorApi(response || request || message))
    // }
  }
})

export default listenerMiddleware.middleware
