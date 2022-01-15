import * as t from "io-ts"

export const MessageInputValidator = t.type({

    "conversationId": t.number

})

export type MessageInputProps = t.TypeOf<typeof MessageInputValidator>