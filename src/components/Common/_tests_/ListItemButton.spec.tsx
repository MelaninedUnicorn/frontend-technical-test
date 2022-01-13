import { render, screen } from "@testing-library/react"
import ListItemButton from "../../../components/Common/ListItemButton"

describe("ListItemButton", () => {
    it("should render correctly ListItemButton", () => {
        render(<ListItemButton />)
        expect(screen.getByTestId('list-item-button')).toBeInTheDocument()
    })
}) 