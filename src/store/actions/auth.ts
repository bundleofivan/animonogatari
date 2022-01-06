import { AppDispatch } from 'store'

export const login = () => {
    return async (dispatch: AppDispatch) => {
        dispatch({type: 'TEST', payload: {}})
    }
}