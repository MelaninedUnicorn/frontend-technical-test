import * as t from "io-ts"

export const conversationsBaseUrl = 'http://localhost:3005'
import { Conversation } from "../types/conversation";

export const getConversations =
    `${conversationsBaseUrl}/conversations`

export const getConversationDetails = (id: string) => `${conversationsBaseUrl}/conversations/${id}`