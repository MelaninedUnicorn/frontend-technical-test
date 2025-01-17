import { render, screen } from "@testing-library/react"
import Spinner from "../../../components/Common/Spinner"

describe("Spinner", () => {
    it("should render correctly Spinner", () => {
        render(<Spinner />)
        expect(screen.getByTestId('spinner')).toBeInTheDocument()
    })
}) 