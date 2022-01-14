import * as t from "io-ts"
import { baseUrl } from "./common"

export const getConversations = (id: number) =>
    `${baseUrl}/conversations/${id}`

export const createConversation = async (id: number, options: object) => {

    const response = await fetch(`${baseUrl}/conversations/${id}`, options)
    const data = await response.json()

    return data
}