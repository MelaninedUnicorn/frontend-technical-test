import { render, screen ,waitFor} from "@testing-library/react"

import { getUsers } from "../users"

describe("UsersApi", () => {
    it("should return a string", () => {
        const expectedbaseUrl = "http://localhost:3005"
        expect(getUsers()).toEqual(`${expectedbaseUrl}/users`);
    })
}) 