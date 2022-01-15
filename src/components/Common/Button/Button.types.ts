import { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import * as t from "io-ts"

export const ButtonValidator = t.type({
  
    "text":t.string,

})

export type ButtonProps = t.TypeOf<typeof ButtonValidator> & MuiButtonProps