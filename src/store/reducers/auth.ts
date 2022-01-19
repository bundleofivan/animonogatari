import createReducer from 'store/createReducer'

export type AuthState = {
    inputUsername: string
    inputPassword: string
    authenticating: boolean
}

const initialState: AuthState = {
    inputUsername: '',
    inputPassword: '',
    authenticating: false,
}

const auth = createReducer(initialState, {
    AUTH_SET_USERNAME: <S>(state: S, payload: Partial<AuthState>) => {
        return {
            ...state,
            ...payload,
        }
    },
    AUTH_SET_PASSWORD: <S>(state: S, payload: Partial<AuthState>) => {
        return {
            ...state,
            ...payload,
        }
    },
    AUTH_LOGIN: <S>(state: S, payload: Partial<AuthState>) => {
        return {
            ...state,
            ...payload,
            authenticating: true
        }
    },
    AUTH_LOGIN_SUCCESS: <S>(state: S, payload: Partial<AuthState>) => {
        return {
            ...state,
            ...payload,
            ...initialState,
        }
    },
    AUTH_LOGIN_FAILURE: <S>(state: S, payload: Partial<AuthState>) => {
        return {
            ...state,
            ...payload,
            authenticating: false
        }
    }
})

export default auth