import type { FC } from 'react'
import { SpinnerProps } from "./Spinner.types";
import CircularProgress  from '@mui/material/CircularProgress'
const Spinner: FC = (props: SpinnerProps) => {
return <CircularProgress {...props} />
}

export default Spinner;