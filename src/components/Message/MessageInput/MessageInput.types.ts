import * as t from "io-ts"
import { ConversationValidator } from '../../../types/conversation'
export const MessageInputValidator = t.type({
    userId: t.string,
    conversationId: t.number

})

export type MessageInputProps = t.TypeOf<typeof MessageInputValidator>