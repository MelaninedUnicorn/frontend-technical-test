import * as t from "io-ts"
import { baseUrl } from "./common"




export const getMessages = (id:number) =>
    `${baseUrl}/messages/${id}`
