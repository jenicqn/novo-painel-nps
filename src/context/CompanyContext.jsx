import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

const CompanyContext = createContext(null)

export function CompanyProvider({ children }) {
  const [company, setCompany] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadCompany() {
      try {
        const hostname = window.location.hostname

        const { data, error } = await supabase
          .from("companies")
          .select("*")
          .eq("domain", hostname)
          .single()

        if (error) throw error

        setCompany(data)
      } catch (err) {
        setError("Empresa não encontrada para este domínio.")
      } finally {
        setLoading(false)
      }
    }

    loadCompany()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-400">
        Carregando empresa...
      </div>
    )
  }

  if (error || !company) {
    return (
      <div className="flex items-center justify-center h-screen text-red-400">
        {error || "Empresa não encontrada."}
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
  const context = useContext(CompanyContext)

  if (!context) {
    throw new Error("useCompany must be used within CompanyProvider")
  }

  return context
}