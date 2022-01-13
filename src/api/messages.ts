import * as t from "io-ts"


export const baseUrl = 'http://localhost:3005'


export const getMessages = (id:string) =>
    `${baseUrl}/messages/${id}`

