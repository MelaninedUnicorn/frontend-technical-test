import { render, screen } from "@testing-library/react"
import Button from "../../../components/Common/Button"

describe("Button", () => {
    it("should render correctly Button and its text", () => {
        render(<Button text={"abc"} />)
        expect(screen.getByTestId('button')).toBeInTheDocument()
        expect(screen.getByText('abc')).toBeInTheDocument()
    })
})