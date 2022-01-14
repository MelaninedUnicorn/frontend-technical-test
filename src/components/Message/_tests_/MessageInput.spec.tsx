import { render, screen } from "@testing-library/react"
import MessageInput from "../MessageInput"
describe("MessageInput", () => {
    it("should render correctly MessageInput", () => {
        render(<MessageInput conversationId={1}/>)
        expect(screen.getByTestId('message-input')).toBeInTheDocument()
       
    })
}) 