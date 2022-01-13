import { render, screen } from "@testing-library/react"
import { timeago } from "../../../lib/dates"
import ConversationCard from "../ConversationCard"

describe("ConversationCard", () => {
    it("should not render ConversationCard ", () => {


        // if no props are passed 
        render(<ConversationCard />)
        expect(screen.queryByTestId('conversation-card')).toBeNull()



    })
    it("should render correctly ConversationCard", () => {

        const props = {
            userId: 1,
            id: 3,
            recipientId: 1,
            recipientNickname: "Thibaut",
            senderI: 4,
            senderNickname: "Elodie",
            lastMessageTimestamp: 1625648667
        }

        render(<ConversationCard  {...props} />)
        expect(screen.getByTestId('conversation-card')).toBeInTheDocument()
        expect(screen.getByText(/Elodie/)).toBeInTheDocument()
        expect(screen.queryByText(/Thibaut/)).toBeNull()


    })
}) 