import createReducer from 'store/createReducer'

export type AuthState = {
    inputUsername: string
    inputPassword: string
}

const initialState: AuthState = {
    inputUsername: '',
    inputPassword: ''
}

const auth = createReducer(initialState, {
    SET_USERNAME: <S>(state: S, payload: Partial<AuthState>) => {
        return {
            ...state,
            ...payload,
        }
    },
    SET_PASSWORD: <S>(state: S, payload: Partial<AuthState>) => {
        return {
            ...state,
            ...payload,
        }
    }
})

export default auth