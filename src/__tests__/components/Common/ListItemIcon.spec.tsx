import { render, screen } from "@testing-library/react"
import ListItemIcon from "../../../components/Common/ListItemIcon"

describe("ListItemIcon", () => {
    it("should render correctly ListItemIcon", () => {
        render(<ListItemIcon />)
        expect(screen.getByTestId('list-item-icon')).toBeInTheDocument()
    })
}) 