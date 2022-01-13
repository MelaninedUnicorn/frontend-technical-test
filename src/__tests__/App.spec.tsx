import { render, screen } from "@testing-library/react"
import App from "../pages"



describe("App", () => {

  const renderComponent = () => render(<App  />);
  it("should render correctly App", async () => {
    
   
    const appComponent = screen.getByTestId("index");

    
    expect(appComponent).toBeInTheDocument();
     
    


  })
}) 