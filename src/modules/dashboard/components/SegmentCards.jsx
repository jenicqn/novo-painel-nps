export default function SegmentCards() {
  const cards = [
    { title: "Moradores", value: 74 },
    { title: "Turistas", value: 82 },
    { title: "Qualidade Média", value: 4.6 },
    { title: "Tempo Médio", value: 4.2 },
  ]

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937]"
        >
          <p className="text-gray-400 text-sm">{card.title}</p>
          <h3 className="text-3xl font-bold mt-2">{card.value}</h3>
        </div>
      ))}
    </div>
  )
}