export enum NavigationTypes {
    TOGGLE_STATUS_FORM = '@navigation/TOGGLE_STATUS_FORM'
}

export interface NavigationState {
    readonly statusFormIsVisible: boolean
}
