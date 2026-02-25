import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export function useDashboardData(storeId) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!storeId) return

    async function fetchData() {
      setLoading(true)

      const { data: summary } = await supabase
        .from("nps_summary")
        .select("*")
        .eq("store_id", storeId)
        .single()

      const { data: distribution } = await supabase
        .from("nps_distribution")
        .select("*")
        .eq("store_id", storeId)

      const { data: trend } = await supabase
        .from("nps_daily")
        .select("*")
        .eq("store_id", storeId)
        .order("date", { ascending: true })

      setData({
        summary,
        distribution,
        trend
      })

      setLoading(false)
    }

    fetchData()
  }, [storeId])

  return { data, loading }
}