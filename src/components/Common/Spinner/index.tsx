import type { FC } from 'react'
import { SpinnerProps } from "./Spinner.types";
import CircularProgress  from '@mui/material/CircularProgress'
const Spinner: FC = (props: SpinnerProps) => {
    return <CircularProgress data-testid="spinner" {...props} />
}

export default Spinner;