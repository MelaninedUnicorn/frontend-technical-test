import { FormControlProps } from './FormControl.types'
import FormControl from '@mui/material/FormControl'
export default function index(props: FormControlProps) {
    return (
        <FormControl data-testid="form-control" {...props} />
    )
}