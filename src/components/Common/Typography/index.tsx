import { TypographyProps } from './Typography.types'
import Typography from '@mui/material/Typography'
export default function index({ text, ...props }: TypographyProps) {
    return (
        <Typography data-testid="typography"  {...props} >
            {text}
        </Typography>
    )
}

