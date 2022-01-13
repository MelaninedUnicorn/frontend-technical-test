import { render, screen } from "@testing-library/react"
import Avatar from "../Avatar"

describe("Avatar", () => {
    it("should render correctly Avatar", () => {
        render(<Avatar />)
        expect(screen.getByTestId('avatar')).toBeInTheDocument()
    })
}) 