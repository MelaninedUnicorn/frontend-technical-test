import { InputLabelProps } from './InputLabel.types'
import InputLabel from '@mui/material/InputLabel'
export default function index(props: InputLabelProps) {
    return (
        <InputLabel data-testid="input-label" {...props} />
    )
}

