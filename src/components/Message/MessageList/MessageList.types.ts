import { MessageValidator } from '../../../types/message'
import * as t from "io-ts"

export const MessageListValidator = t.type({
    messages: t.array(MessageValidator),
    currentUserId:t.number,

})

export type MessageListProps = t.TypeOf<typeof MessageListValidator>