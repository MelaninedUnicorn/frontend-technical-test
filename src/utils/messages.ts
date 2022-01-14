import * as t from "io-ts"
import { baseUrl } from "../api/common"




export const getMessages = (id:number) =>
    `${baseUrl}/messages/${id}`
