import createReducer from 'store/createReducer'

export type AuthState = {
    username: string
}

const initialState: AuthState = {
    username: '',
}

const auth = createReducer(initialState, {

})

export default auth