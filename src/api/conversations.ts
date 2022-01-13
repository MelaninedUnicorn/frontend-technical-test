import * as t from "io-ts"
import { baseUrl } from "./common"




export const getConversations = (id:number) =>
    `${baseUrl}/conversations/${id}`

