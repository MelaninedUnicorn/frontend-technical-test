import { InputProps } from './Input.types'
import OutlinedInput from '@mui/material/OutlinedInput'
export default function index(props: InputProps) {
    return (
        <OutlinedInput data-testid="input" {...props} />
    )
}
