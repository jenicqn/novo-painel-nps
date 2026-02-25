import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "../lib/supabase"
import { useCompany } from "./CompanyContext"

const StoreContext = createContext(null)

export function StoreProvider({ children }) {
  const { company } = useCompany()

  const [stores, setStores] = useState([])
  const [activeStore, setActiveStore] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!company) return

    async function loadStores() {
      setLoading(true)

      const { data, error } = await supabase
        .from("stores")
        .select("*")
        .eq("company_id", company.id)
        .order("created_at", { ascending: true })

      if (error) {
        console.error("Erro ao carregar lojas:", error)
        setLoading(false)
        return
      }

      setStores(data)

      const savedStoreId = localStorage.getItem("active_store_id")

      if (savedStoreId) {
        const saved = data.find((s) => s.id === savedStoreId)
        setActiveStore(saved || data[0] || null)
      } else {
        setActiveStore(data[0] || null)
      }

      setLoading(false)
    }

    loadStores()
  }, [company])

  const changeStore = (storeId) => {
    const selected = stores.find((s) => s.id === storeId)

    if (selected) {
      setActiveStore(selected)
      localStorage.setItem("active_store_id", storeId)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-400">
        Carregando lojas...
      </div>
    )
  }

  return (
    <StoreContext.Provider
      value={{
        stores,
        activeStore,
        changeStore,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const context = useContext(StoreContext)

  if (!context) {
    throw new Error("useStore must be used within StoreProvider")
  }

  return context
}