import * as t from "io-ts"

export const MessageContainerValidator  = t.type({
    "conversationId": t.number,
  
})

export type MessageContainerProps = t.TypeOf<typeof MessageContainerValidator>