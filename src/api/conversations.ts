import * as t from "io-ts"

export const baseUrl = 'http://localhost:3005'


export const getConversations = (id:number) =>
    `${baseUrl}/conversations/${id}`

