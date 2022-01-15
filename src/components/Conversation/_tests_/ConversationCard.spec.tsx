import { render, screen } from "@testing-library/react"
import ConversationCard from "../ConversationCard"

describe("ConversationCard", () => {
    it("should not render ConversationCard ", () => {

        const props = undefined
        // if no props are passed 
        render(<ConversationCard {...props} />)
        expect(screen.queryByTestId('conversation-card')).toBeNull()

    })
    it("should render correctly ConversationCard", () => {

        const props = {
            "userId": 1,
            "id": 3,
            "recipientId": 1,
            "recipientNickname": "Thibaut",
            "senderId": 4,
            "senderNickname": "Elodie",
            "lastMessageTimestamp": 1625648667
        }

        render(<ConversationCard {...props} />)
        expect(screen.getByTestId('conversation-card')).toBeInTheDocument()
        expect(screen.getByText(/Elodie/)).toBeInTheDocument()
        expect(screen.queryByText(/Thibaut/)).toBeNull()

    })

    it("should call handle click and go to route ", () => {})
}) 