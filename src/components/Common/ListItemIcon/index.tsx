import { ListItemIconProps } from './ListItemIcon.types'
import ListItemIcon from '@mui/material/ListItemIcon'
export default function index(props: ListItemIconProps) {
    return (
        <ListItemIcon data-testid="list-item-icon" {...props} />
    )
}
