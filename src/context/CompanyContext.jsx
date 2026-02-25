import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "../lib/supabase"
import { useAuth } from "./AuthContext"

const CompanyContext = createContext(null)

export function CompanyProvider({ children }) {
  const { user } = useAuth()
  const [company, setCompany] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return

    async function loadCompany() {
      setLoading(true)

      // Buscar company_id do usuário
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("company_id")
        .eq("id", user.id)
        .single()

      if (userError) {
        console.error(userError)
        setLoading(false)
        return
      }

      // Buscar empresa pelo id
      const { data: companyData, error: companyError } = await supabase
        .from("companies")
        .select("*")
        .eq("id", userData.company_id)
        .single()

      if (companyError) {
        console.error(companyError)
        setLoading(false)
        return
      }

      setCompany(companyData)
      setLoading(false)
    }

    loadCompany()
  }, [user])

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Carregando empresa...
      </div>
    )
  }

  return (
    <CompanyContext.Provider value={{ company }}>
      {children}
    </CompanyContext.Provider>
  )
}

export function useCompany() {
  return useContext(CompanyContext)
}