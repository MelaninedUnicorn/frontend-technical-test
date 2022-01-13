import { render, screen } from "@testing-library/react"
import List from "../../../components/Common/List"

describe("List", () => {
    it("should render correctly List", () => {
        render(<List />)
        expect(screen.getByTestId('list')).toBeInTheDocument()
    })
}) 