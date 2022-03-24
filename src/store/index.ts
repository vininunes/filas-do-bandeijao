import { createStore, Store } from 'redux'

import rootReducers from './reducers/rootReducer'

export interface ApplicationState {}

const store: Store<ApplicationState> = createStore(rootReducers)

export default store
