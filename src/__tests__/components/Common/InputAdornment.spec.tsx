import { render, screen } from "@testing-library/react"
import InputAdornment from "../../../components/Common/InputAdornment"

describe("InputAdornment", () => {
    it("should render correctly InputAdornment", () => {
        render(<InputAdornment position="end"/>)
        expect(screen.getByTestId('input-adornment')).toBeInTheDocument()
    })
}) 