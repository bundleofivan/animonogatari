import { configureStore } from '@reduxjs/toolkit'
import { combineReducers, AnyAction } from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import logger from 'redux-logger'

import auth, { AuthState } from 'store/reducers/auth'

type ReduxMiddleware = typeof thunk | typeof logger
const middleware: Array<ReduxMiddleware> = [thunk]
if(process.env.NODE_ENV === 'development') middleware.push(logger)

const applicationReducer = combineReducers({ auth })

const store = configureStore({
  reducer: applicationReducer,
  middleware,
})

export type RootState = {
  auth: AuthState
}

export type AppDispatch = typeof store.dispatch & ThunkDispatch<any, undefined, AnyAction>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store