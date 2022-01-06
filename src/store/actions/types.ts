export type ActionPayload = Partial<null>

export type Action = {
    type: string
    payload: ActionPayload
}

export type ActionHandler = Record<string, <S>(state: S, payload: Action['payload']) => S>