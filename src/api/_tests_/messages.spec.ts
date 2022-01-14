import { render, screen ,waitFor} from "@testing-library/react"

import { getMessages } from "../../utils/messages"

describe("MessagesApi", () => {
    it("should return a string", () => {
        const expectedbaseUrl = "http://localhost:3005"
        expect(getMessages(2)).toEqual(`${expectedbaseUrl}/messages/2`);
    })
}) 