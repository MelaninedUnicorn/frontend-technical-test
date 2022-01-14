import { render, screen ,waitFor} from "@testing-library/react"

import { createConversation, getConversations } from "../conversations"

describe("ConversationsApi", () => {
    describe("getConversations function", () => {
    it("should return a string", () => {
        const expectedbaseUrl = "http://localhost:3005"
        expect(getConversations(2)).toEqual(`${expectedbaseUrl}/conversations/2`);
        expect(getConversations(22342)).toEqual(`${expectedbaseUrl}/conversations/22342`);
    })

}) 
describe("createConversation function", () => {
    it("should return an object with the conversation id", async () => {
        const params = {
            recipientId: 0
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(params)
        };


        const response = await createConversation(1, options);
        expect(response).toHaveProperty('id');
    })
}) 
}) 