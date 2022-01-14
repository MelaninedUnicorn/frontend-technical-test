import { render, screen } from "@testing-library/react"
import Typography from "../../../components/Common/Typography"

describe("Typography", () => {
    it("should render correctly Typography", () => {
        render(<Typography  text={'Example text'}/>)
        expect(screen.getByTestId('typography')).toBeInTheDocument()
        expect(screen.getByText(/Example text/)).toBeInTheDocument()
    })
}) 