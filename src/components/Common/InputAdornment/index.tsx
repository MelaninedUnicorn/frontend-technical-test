import { InputAdornmentProps } from './InoutAdornment.types'
import InputAdornment from '@mui/material/InputAdornment'
export default function index(props: InputAdornmentProps) {
    return (
        <InputAdornment data-testid="input-adornment" {...props} />
    )
}

