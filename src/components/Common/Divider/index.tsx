import { DividerProps } from './Divider.types'
import Divider from '@mui/material/Divider'
export default function index(props: DividerProps) {
    return (
        <Divider data-testid="divider" {...props} />
    )
}

