import { createStore, Store } from 'redux'

import { NavigationState } from './reducers/navigation/types'

import rootReducers from './reducers/rootReducer'

export interface ApplicationState {
    navigation: NavigationState
}

const store: Store<ApplicationState> = createStore(rootReducers)

export default store
