import { render, screen } from "@testing-library/react"
import Box from "../../../components/Common/Box"

describe("Box", () => {
    it("should render correctly Box", () => {
        render(<Box />)
        expect(screen.getByTestId('box')).toBeInTheDocument()
    })
})