import { render, screen } from "@testing-library/react"
import ConversationCard from "../ConversationCard"

describe("ConversationCard", () => {
    it("should render correctly ConversationCard", () => {
        const props =   {
            id: 3,
            recipientId: 1,
            recipientNickname: "Thibaut",
            senderI: 4,
            senderNickname: "Elodie",
            lastMessageTimestamp: 1625648667
          }
        render(<ConversationCard  {...props}/>)
        expect(screen.getByTestId('conversation-card')).toBeInTheDocument()
    })
}) 