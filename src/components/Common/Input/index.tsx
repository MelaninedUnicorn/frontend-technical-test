import { InputProps } from './Input.types'
import Input from '@mui/material/Input'
export default function index(props: InputProps) {
    return (
        <Input data-testid="input" {...props} />
    )
}
