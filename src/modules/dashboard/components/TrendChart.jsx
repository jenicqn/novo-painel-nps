export default function TrendChart() {
  return (
    <div className="w-full bg-[#111827] rounded-2xl p-6 border border-[#1F2937]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Tendência NPS</h2>
        <div className="space-x-2 text-sm">
          <button className="px-3 py-1 bg-[#1F2937] rounded-lg">7d</button>
          <button className="px-3 py-1 bg-[#1F2937] rounded-lg">30d</button>
          <button className="px-3 py-1 bg-blue-600 rounded-lg">90d</button>
        </div>
      </div>

      <div className="h-72 flex items-center justify-center text-gray-500">
        Gráfico aqui
      </div>
    </div>
  )
}