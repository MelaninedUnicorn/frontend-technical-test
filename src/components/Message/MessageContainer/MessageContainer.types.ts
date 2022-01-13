import * as t from "io-ts"

export const MessageContainerValidator  = t.type({
  id: t.string,
  
})

export type MessageContainerProps = t.TypeOf<typeof MessageContainerValidator>