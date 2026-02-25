export default function AlertsPanel() {
  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937]">
      <h2 className="text-lg font-semibold mb-6">
        Alertas Inteligentes
      </h2>

      <div className="space-y-4 text-sm">
        <div className="border-l-4 border-red-500 pl-3">
          Palavra "demora" cresceu 38%
        </div>
        <div className="border-l-4 border-yellow-400 pl-3">
          NPS caiu 4 pontos
        </div>
        <div className="border-l-4 border-green-500 pl-3">
          Pico de respostas sábado
        </div>
      </div>
    </div>
  )
}