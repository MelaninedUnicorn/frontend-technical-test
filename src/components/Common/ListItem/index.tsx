import { ListItemProps } from './ListItem.types'
import ListItem from '@mui/material/ListItem'
export default function index(props: ListItemProps) {
    return (
        <ListItem data-testid="list-item" {...props} />
    )
}
