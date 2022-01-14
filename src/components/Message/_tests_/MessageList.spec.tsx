import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import List from "../../Common/List"
import MessageList from "../MessageList"

describe("MessageList",  () => {
    it("should render correctly MessageList if messages are passed as props ", async () => {
        const props = {
            messages : [
              {
                id: 1,
                conversationId: 1,
                timestamp: 1625637849,
                authorId: 1,
                body: "Bonjour c'est le premier message de la première conversation"
              },
              {
                id: 2,
                conversationId: 1,
                timestamp: 1625637867,
                authorId: 1,
                body: "Bonjour c'est le second message de la première conversation"
              },
              {
                id: 3,
                conversationId: 1,
                timestamp: 1625648667,
                authorId: 2,
                body: "Bonjour c'est le troisième message de la première conversation"
              }
            ]
        }
        render(<MessageList currentUserId={1}  {...props}/>)
        
        
        expect(screen.getByTestId('message-list')).toBeInTheDocument()
        expect(screen.getByText(/Bonjour c'est le premier message de la première conversation/)).toBeInTheDocument()
        expect(screen.getByText(/Bonjour c'est le second message de la première conversation/)).toBeInTheDocument()
        expect(screen.getByText(/Bonjour c'est le troisième message de la première conversation/)).toBeInTheDocument()
        
       
    })
}) 