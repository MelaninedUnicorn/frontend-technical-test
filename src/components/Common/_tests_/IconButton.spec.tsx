import { fireEvent, render, screen } from "@testing-library/react"
import IconButton from "../../../components/Common/IconButton"

describe("IconButton", () => {
    it("should render correctly IconButton", () => {
        render(<IconButton />)
        expect(screen.getByTestId('icon-button')).toBeInTheDocument()
    })

    it('calls onClick prop when clicked', () => {
        const handleClick = jest.fn()
        render(<IconButton onClick={handleClick}/>)
        fireEvent.click(screen.getByTestId('icon-button'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
}) 