import { GridProps } from './Grid.types'
import Grid from '@mui/material/Grid'
export default function index(props: GridProps) {
    return (
        <Grid data-testid="grid" {...props} />
    )
}
