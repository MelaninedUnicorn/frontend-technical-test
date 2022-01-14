import * as t from "io-ts"
import { baseUrl } from "../api/common"




export const getUsers = () =>
    `${baseUrl}/users`

