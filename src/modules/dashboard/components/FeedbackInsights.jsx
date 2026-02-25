export default function FeedbackInsights() {
  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937]">
      <h2 className="text-lg font-semibold mb-6">
        Feedback Intelligence
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-green-400 mb-3">Top Promotores</h3>
          <ul className="space-y-2 text-sm">
            <li>bom</li>
            <li>rápido</li>
            <li>qualidade</li>
          </ul>
        </div>

        <div>
          <h3 className="text-red-400 mb-3">Top Detratores</h3>
          <ul className="space-y-2 text-sm">
            <li>demora</li>
            <li>frio</li>
            <li>caro</li>
          </ul>
        </div>
      </div>
    </div>
  )
}