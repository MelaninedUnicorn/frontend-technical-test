import { BoxProps } from './Box.types'
import Box from '@mui/material/Box'
export default function index(props: BoxProps) {
    return (
        <Box {...props} />
    )
}
