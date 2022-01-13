import { render, screen ,waitFor} from "@testing-library/react"

import { getConversations } from "../conversations"

describe("ConversationsApi", () => {
    it("should return a string", () => {
        const expectedbaseUrl = "http://localhost:3005"
        expect(getConversations(2)).toEqual(`${expectedbaseUrl}/conversations/2`);
    })
}) 