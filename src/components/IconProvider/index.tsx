import { ComponentProps } from "./types";

import {
    ExpandMore
} from '@material-ui/icons'


export default function IconProvider({ icon, size }: ComponentProps) {
    switch (icon) {
        case 'expandMore':
            return <ExpandMore fontSize={size} />
        default:
            return <div />
    }
}
