import { render, screen } from "@testing-library/react"
import ListItem from "../../../components/Common/ListItem"

describe("ListItem", () => {
    it("should render correctly ListItem", () => {
        render(<ListItem />)
        expect(screen.getByTestId('list-item')).toBeInTheDocument()
    })
}) 