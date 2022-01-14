import { render, screen } from "@testing-library/react"
import App from "../pages"

describe("App", () => {
  it("should render correctly App", async () => {
    render(<App  />)
    const appComponent = screen.getByTestId("index");
    expect(appComponent).toBeInTheDocument();
  

  })
}) 