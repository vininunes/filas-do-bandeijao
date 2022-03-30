import { NavigationState } from '../reducers/navigation/types'

export interface StateProps {
    navigation?: NavigationState
}

export interface DispatchProps {
    toggleStatusForm?(): void
}
