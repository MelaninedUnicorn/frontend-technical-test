import { render, screen } from "@testing-library/react"
import ListItemAvatar from "../../../components/Common/ListItemAvatar"

describe("ListItemAvatar", () => {
    it("should render correctly ListItemAvatar", () => {
        render(<ListItemAvatar />)
        expect(screen.getByTestId('list-item-avatar')).toBeInTheDocument()
    })
}) 