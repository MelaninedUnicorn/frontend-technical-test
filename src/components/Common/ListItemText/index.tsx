import { ListItemTextProps } from './ListItemText.types'
import ListItemText from '@mui/material/ListItemText'
export default function index(props: ListItemTextProps) {
    return (
        <ListItemText data-testid="list-item-text" {...props} />
    )
}
