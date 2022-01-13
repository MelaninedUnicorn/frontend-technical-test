import { ButtonProps } from './Button.types'
import Button from '@mui/material/Button'
export default function index({text, ...props}: ButtonProps) {
    return (
        <Button data-testid="button" {...props} > {text} </Button>
    )
}
