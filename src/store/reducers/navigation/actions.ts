import { action } from 'typesafe-actions'

import { NavigationTypes } from './types'

export const toggleStatusForm = () => action(NavigationTypes.TOGGLE_STATUS_FORM)
