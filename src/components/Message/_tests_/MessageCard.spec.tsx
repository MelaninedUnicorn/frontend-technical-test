import { render, screen } from "@testing-library/react"
import MessageCard from "../MessageCard"

const loggedUserInfo = {
    "id": 1,
    "nickname": "Thibaut",
    "token": "xxxx"
}

const data = {"id": 1,
    "conversationId": 1,
    "timestamp": 1625637849,
    "authorId": 1,
    "body": "Bonjour c'est le premier message de la première conversation"}

describe("MessageCard", () => {
   
    it("should render message with the 'mine' class applied", () => {
     
        const props = {
            data,
            "isMine": true,
            "startsSequence": false,
            "endsSequence": false,
            "showTimestamp": false,
            "senderInfo": loggedUserInfo
        }

        render(<MessageCard {...props} />)
        expect(screen.getByTestId('message-card')).toBeInTheDocument()
        expect(screen.getByTestId('message-card')).toHaveClass("mine")
        expect(screen.getByTestId('message-card')).not.toHaveClass("start")
        expect(screen.getByTestId('message-card')).not.toHaveClass("end")

    })

    it("should render message with the 'start' and 'mine' class applied", () => {
     
        const props = {
            data,
            "isMine": true,
            "startsSequence": true,
            "endsSequence": false,
            "showTimestamp": false,
            "senderInfo": loggedUserInfo
        }

        render(<MessageCard {...props} />)
        expect(screen.getByTestId('message-card')).toBeInTheDocument()
        expect(screen.getByTestId('message-card')).toHaveClass("mine")
        expect(screen.getByTestId('message-card')).toHaveClass("start")
        expect(screen.getByTestId('message-card')).not.toHaveClass("end")

    })
    it("should render message with the 'end' and 'mine' class applied", () => {
     
        const props = {
            data,
            "isMine": true,
            "startsSequence": false,
            "endsSequence": true,
            "showTimestamp": false,
            "senderInfo": loggedUserInfo
        }

        render(<MessageCard {...props} />)
        expect(screen.getByTestId('message-card')).toBeInTheDocument()
        expect(screen.getByTestId('message-card')).toHaveClass("mine")
        expect(screen.getByTestId('message-card')).not.toHaveClass("start")
        expect(screen.getByTestId('message-card')).toHaveClass("end")

    })

    it("should render message with the 'start' and 'end' class applied", () => {
     
        const props = {
            data,
            "isMine": false,
            "startsSequence": true,
            "endsSequence": true,
            "showTimestamp": false,
            "senderInfo": loggedUserInfo
        }

        render(<MessageCard {...props} />)
        expect(screen.getByTestId('message-card')).toBeInTheDocument()
        expect(screen.getByTestId('message-card')).not.toHaveClass("mine")
        expect(screen.getByTestId('message-card')).toHaveClass("start")
        expect(screen.getByTestId('message-card')).toHaveClass("end")

    })
}) 