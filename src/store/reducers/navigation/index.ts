import { Reducer } from 'redux'

import { NavigationState, NavigationTypes } from './types'

const INITIAL_STATE: NavigationState = {
    statusFormIsVisible: false
}

const reducer: Reducer<NavigationState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NavigationTypes.TOGGLE_STATUS_FORM:
            return {
                ...state,
                statusFormIsVisible: !state.statusFormIsVisible
            }
        default:
            return state
    }
}

export default reducer
