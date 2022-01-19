import axios from 'axios'

import { AppDispatch, RootState } from 'store'

export const login = () => {
    return async (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch({type: 'AUTH_LOGIN', payload: {}})
        const { auth: { inputUsername, inputPassword }} = getState()
        try {
            dispatch({type: 'AUTH_LOGIN_SUCCESS', payload: {}})
        } catch {
            dispatch({type: 'AUTH_LOGIN_FAILURE', payload: {}})
        }
    }
}

export const setUsername = (newInput: string) => {
    return (dispatch: AppDispatch) => {
        dispatch({type: 'AUTH_SET_USERNAME', payload: { inputUsername: newInput }})
    }
}

export const setPassword = (newInput: string) => {
    return (dispatch: AppDispatch) => {
        dispatch({type: 'AUTH_SET_PASSWORD', payload: { inputPassword: newInput }})
    }
}