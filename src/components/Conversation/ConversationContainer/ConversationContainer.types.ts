import * as t from "io-ts"


export const ConversationContainerValidator = t.type({
    userId: t.number,
})

export type ConversationContainerProps = t.TypeOf<typeof ConversationContainerValidator>