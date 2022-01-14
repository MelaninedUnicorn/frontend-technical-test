import { render, RenderOptions } from "@testing-library/react"
import { FC, ReactElement } from "react"
import { SwrConfig } from '../components/SwrConfig'

const AllTheProviders: FC<any> = ({ children }) => {
    return (
      <SwrConfig swrConfig={{ dedupingInterval: 0, provider: () => new Map() }}>
        {children}
      </SwrConfig>
    );
  };
  
  const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
  ) => render(ui, { wrapper: AllTheProviders, ...options });