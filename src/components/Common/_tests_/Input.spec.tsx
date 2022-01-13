import { render, screen } from "@testing-library/react"
import Input from "../../../components/Common/Input"

describe("Input", () => {
    it("should render correctly Input", () => {
        render(<Input />)
        expect(screen.getByTestId('input')).toBeInTheDocument()
    })
}) 