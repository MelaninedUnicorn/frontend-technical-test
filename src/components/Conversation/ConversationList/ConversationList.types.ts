import { ConversationValidator } from '../../../types/conversation'
import * as t from "io-ts"


export const ConversationListValidator = t.type({
    conversations: t.array(ConversationValidator),
    currentUserId:t.number,

})

export type ConversationListProps = t.TypeOf<typeof ConversationListValidator>