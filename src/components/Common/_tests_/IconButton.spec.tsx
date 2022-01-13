import { render, screen } from "@testing-library/react"
import IconButton from "../../../components/Common/IconButton"

describe("IconButton", () => {
    it("should render correctly IconButton", () => {
        render(<IconButton />)
        expect(screen.getByTestId('icon-button')).toBeInTheDocument()
    })
}) 