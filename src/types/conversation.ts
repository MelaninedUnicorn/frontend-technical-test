import * as t from "io-ts"

export const ConversationValidator  = t.type({
  id: t.number,
  recipientId: t.number,
  recipientNickname: t.string,
  senderId: t.number,
  senderNickname: t.string,
  lastMessageTimestamp:t.number
})

export type Conversation = t.TypeOf<typeof ConversationValidator>