import { render, screen } from "@testing-library/react"
import FormControl from "../../../components/Common/FormControl"

describe("FormControl", () => {
    it("should render correctly FormControl", () => {
        render(<FormControl />)
        expect(screen.getByTestId('form-control')).toBeInTheDocument()
    })
}) 