import { AuthProvider } from "../context/AuthContext"
import { CompanyProvider } from "../context/CompanyContext"
import { StoreProvider } from "../context/StoreContext"

export default function Providers({ children }) {
  return (
    <AuthProvider>
      <CompanyProvider>
        <StoreProvider>
          {children}
        </StoreProvider>
      </CompanyProvider>
    </AuthProvider>
  )
}