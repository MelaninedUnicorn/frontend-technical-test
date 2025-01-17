import { render, screen } from "@testing-library/react"
import ConversationList from "../ConversationList"

describe("ConversationList",  () => {
    it("should render correctly ConversationList if no conversations are passed as props", () => {
        render(<ConversationList conversations={undefined}/>)
        expect(screen.queryByTestId('conversation-list')).toBeNull()
    })

    it("should render correctly ConversationList if conversations are passed as props ",() => {
        const props = {
            "conversations" : [
                {
                    "id": 1,
                    "recipientId": 2,
                    "recipientNickname": "Jeremie",
                    "senderId": 1,
                    "senderNickname": "Thibaut",
                    "lastMessageTimestamp": 1625637849
                },
                {
                    "id": 2,
                    "recipientId": 3,
                    "recipientNickname": "Patrick",
                    "senderId": 1,
                    "senderNickname": "Thibaut",
                    "lastMessageTimestamp": 1620284667
                },
                {
                    "id": 3,
                    "recipientId": 1,
                    "recipientNickname": "Thibaut",
                    "senderId": 4,
                    "senderNickname": "Elodie",
                    "lastMessageTimestamp": 1625648667
                }
            ]
        }
        render(<ConversationList  {...props}/>)
        
        expect(screen.getByTestId('conversation-list')).toBeInTheDocument()
        expect(screen.getByText(/Jeremie/)).toBeInTheDocument()
        expect(screen.getByText(/Patrick/)).toBeInTheDocument()
        expect(screen.getByText(/Elodie/)).toBeInTheDocument()
       
    })
}) 