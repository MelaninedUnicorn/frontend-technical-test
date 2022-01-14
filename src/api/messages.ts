import * as t from "io-ts"
import { baseUrl } from "./common"

export const getMessages = (id:number) =>
    `${baseUrl}/messages/${id}`

export const sendMessage = async (id:number ,options:object) => {
    const response = await fetch(`${baseUrl}/messages/${id}`, options)
    const data = await response.json()
    if (!response.ok) {
        throw new Error(data.message);
    }
   
  
    return data
}
