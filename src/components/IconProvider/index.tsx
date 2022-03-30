import { ComponentProps } from './types'

import { ExpandMore, NavigateNext, Place, Speed } from '@material-ui/icons'

export default function IconProvider({ icon, size }: ComponentProps) {
    switch (icon) {
        case 'expandMore':
            return <ExpandMore fontSize={size} />
        case 'place':
            return <Place fontSize={size} />
        case 'speed':
            return <Speed fontSize={size} />
        case 'navigateNext':
            return <NavigateNext fontSize={size} />
        default:
            return <div />
    }
}
