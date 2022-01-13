import { render, screen } from "@testing-library/react"
import Grid from "../../../components/Common/Grid"

describe("Grid", () => {
    it("should render correctly Grid", () => {
        render(<Grid />)
        expect(screen.getByTestId('grid')).toBeInTheDocument()
    })
}) 