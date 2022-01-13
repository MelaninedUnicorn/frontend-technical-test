import { IconButtonProps } from './IconButton.types'
import IconButton from '@mui/material/IconButton'
export default function index(props: IconButtonProps) {
    return (
        <IconButton data-testid="icon-button" {...props} />
    )
}

