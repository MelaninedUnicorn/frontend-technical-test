import * as t from "io-ts"
import {ConversationValidator} from "../types/conversation"

export const conversationsBaseUrl = 'http://localhost:3005'


export const getConversations = (id:number) =>
    `${conversationsBaseUrl}/conversations/${id}`

export const getConversationDetails = (id: string) => `${conversationsBaseUrl}/conversations/${id}`