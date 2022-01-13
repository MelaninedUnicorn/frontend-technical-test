import { AvatarProps } from './Avatar.types'
import Avatar from '@mui/material/Avatar'

export default function index(props: AvatarProps) {
    return (
        <Avatar data-testid="avatar" {...props} />
    )
}
