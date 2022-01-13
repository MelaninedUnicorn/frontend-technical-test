import { UserValidator } from '../../../types/user'
import { MessageValidator } from '../../../types/message'

import * as t from "io-ts"

export const MessageCardValidator = t.type({
    data: MessageValidator,
    isMine: t.boolean,
    startsSequence: t.boolean,
    endsSequence: t.boolean,
    showTimestamp: t.boolean,
    senderInfo: UserValidator,

})

export type MessageCardProps = t.TypeOf<typeof MessageCardValidator>