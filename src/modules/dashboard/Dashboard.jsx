import { useStore } from "../../context/StoreContext"
import { useDashboardData } from "../../hooks/useDashboardData"
import HeroNPS from "./components/HeroNPS"
import SegmentCards from "./components/SegmentCards"
import AlertsPanel from "./components/AlertsPanel"
import TrendChart from "./components/TrendChart"
import FeedbackInsights from "./components/FeedbackInsights"

export default function Dashboard() {
  const { activeStore } = useStore()
  const { data, loading } = useDashboardData(activeStore?.id)

  if (!activeStore) {
    return (
      <div className="text-gray-400">
        Nenhuma loja selecionada
      </div>
    )
  }

  if (loading) {
    return (
      <div className="text-gray-400 animate-pulse">
        Carregando dados...
      </div>
    )
  }

  if (!data) {
    return (
      <div className="text-red-400">
        Erro ao carregar dados
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <HeroNPS summary={data.summary} distribution={data.distribution} />
      <SegmentCards summary={data.summary} />
      <AlertsPanel />
      <TrendChart trend={data.trend} />
      <FeedbackInsights />
    </div>
  )
}