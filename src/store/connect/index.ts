import { bindActionCreators, Dispatch } from 'redux'
import { ApplicationState } from '..'
import * as NavigationActions from '../reducers/navigation/actions'

export const stateToProps = (state: ApplicationState) => ({
    navigation: state.navigation
})

export const dispatchToProps = (dispatch: Dispatch) => bindActionCreators(NavigationActions, dispatch)
