import { render, screen } from "@testing-library/react"
import Stack from "../../../components/Common/Stack"

describe("Stack", () => {
    it("should render correctly Stack", () => {
        render(<Stack />)
        expect(screen.getByTestId('stack')).toBeInTheDocument()
    })
}) 