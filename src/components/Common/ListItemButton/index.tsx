import { ListItemButtonProps } from './ListItemButton.types'
import ListItemButton from '@mui/material/ListItemButton'
export default function index(props: ListItemButtonProps) {
    return (
        <ListItemButton data-testid="list-item-button" {...props} />
    )
}
