import { ComponentProps } from './types'

import { ExpandMore, Place, Speed } from '@material-ui/icons'

export default function IconProvider({ icon, size }: ComponentProps) {
    switch (icon) {
        case 'expandMore':
            return <ExpandMore fontSize={size} />
        case 'place':
            return <Place fontSize={size} />
        case 'speed':
            return <Speed fontSize={size} />
        default:
            return <div />
    }
}
