import { StackProps } from './Stack.types'
import Stack from '@mui/material/Stack'
export default function index(props: StackProps) {
    return (
        <Stack data-testid="stack" {...props} />
    )
}
