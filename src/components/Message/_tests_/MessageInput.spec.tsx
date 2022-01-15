import { fireEvent, getByTestId, render, screen } from "@testing-library/react"
import React from "react"

import MessageInput from "../MessageInput"

describe("MessageInput", () => {
  
    it("should change call the handleChange function when a message is typed", () => {
        const logSpy = jest.spyOn(console, 'log');
        render(<MessageInput conversationId={1}/>)
        const messageInput = screen.getByTestId( "message-input-field")
        
        fireEvent.change(messageInput , {"target": {"value": 'My test message'}})
        expect(messageInput).toHaveValue("My test message")
        expect(logSpy).toBeCalledWith('handle change');
    })

    it("should change call the handleSendMessage function when button is clicked", () => {
        const logSpy = jest.spyOn(console, 'log');
        const {container} = render(<MessageInput conversationId={1}/>)
        const submitButton = getByTestId( container,'message-input-send-button')
        
        fireEvent.click(submitButton);
        expect(logSpy).toBeCalledWith('handle send message');

    })
   
}) 