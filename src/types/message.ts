import * as t from "io-ts"

export const MessageValidator = t.type({
  id: t.number,
  conversationId: t.number,
  authorId: t.number,
  timestamp: t.number,
  body: t.string
})

export type Message = t.TypeOf<typeof MessageValidator>