import { render, screen } from "@testing-library/react"
import ListItemText from "../../../components/Common/ListItemText"

describe("ListItemText", () => {
    it("should render correctly ListItemText", () => {
        render(<ListItemText />)
        expect(screen.getByTestId('list-item-text')).toBeInTheDocument()
    })
}) 