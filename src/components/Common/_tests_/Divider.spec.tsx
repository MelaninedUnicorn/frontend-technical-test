import { render, screen } from "@testing-library/react"
import Divider from "../../../components/Common/Divider"

describe("Divider", () => {
    it("should render correctly Divider", () => {
        render(<Divider />)
        expect(screen.getByTestId('divider')).toBeInTheDocument()
    })
}) 