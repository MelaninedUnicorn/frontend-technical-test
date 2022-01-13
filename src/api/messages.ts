import * as t from "io-ts"


export const baseUrl = 'http://localhost:3005'


export const getMessages = (id:number) =>
    `${baseUrl}/messages/${id}`
