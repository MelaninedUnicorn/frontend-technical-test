import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography'
import * as t from "io-ts"

export const TypographyValidator  = t.type({
    "text": t.string,
  
})

export type TypographyProps = t.TypeOf<typeof TypographyValidator> & MuiTypographyProps