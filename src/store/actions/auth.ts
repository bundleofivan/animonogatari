import { AppDispatch } from 'store'

export const login = () => {
    return async (dispatch: AppDispatch) => {
        dispatch({type: 'TEST', payload: {}})
    }
}

export const setUsername = (newInput: string) => {
    return (dispatch: AppDispatch) => {
        dispatch({type: 'SET_USERNAME', payload: { inputUsername: newInput }})
    }
}

export const setPassword = (newInput: string) => {
    return (dispatch: AppDispatch) => {
        dispatch({type: 'SET_PASSWORD', payload: { inputPassword: newInput }})
    }
}