import * as t from "io-ts"

export const UserValidator  = t.type({
  id: t.number,
  nickname: t.string,
  token: t.string,
})

export type User = t.TypeOf<typeof UserValidator>