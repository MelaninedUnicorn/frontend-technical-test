import { render, screen, waitFor } from "@testing-library/react"

import { getMessages, sendMessage } from "../messages"

describe("MessagesApi", () => {
    describe("getMessages function", () => {
        it("should return a string", () => {
            const expectedbaseUrl = "http://localhost:3005"
            expect(getMessages(2)).toEqual(`${expectedbaseUrl}/messages/2`);
        })
    }
    )

    describe("getMessages function", () => {
        it("should return an object with the message id", async () => {
            const params = {
                body: "Test message",
                timestamp: 0
            }
            const options = {
                method: 'POST',
                body: JSON.stringify(params)
            };


            const response = await sendMessage(1, options);
            expect(response).toHaveProperty('id');
        })

    })

}) 