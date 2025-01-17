import { ListItemAvatarProps } from './ListItemAvatar.types'
import ListItemAvatar from '@mui/material/ListItemAvatar'
export default function index(props: ListItemAvatarProps) {
    return (
        <ListItemAvatar data-testid="list-item-avatar" {...props} />
    )
}
