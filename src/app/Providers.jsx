import { CompanyProvider } from "../context/CompanyContext"
import { StoreProvider } from "../context/StoreContext"

export default function Providers({ children }) {
  return (
    <CompanyProvider>
      <StoreProvider>
        {children}
      </StoreProvider>
    </CompanyProvider>
  )
}