import { Action, ActionHandler } from './actions/types'

const createReducer = <S>(initialState: S, handlers: ActionHandler): (state: S, action: Action) => S => {
    return (state = initialState, action: Action) => {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action.payload)
        } else {
            return state
        }
    }
}

export default createReducer