import { AuthState } from 'store/reducers/auth'

export type ActionPayload = Partial<AuthState>

export type Action = {
    type: string
    payload: ActionPayload
}

export type ActionHandler = Record<string, <S>(state: S, payload: Action['payload']) => S>