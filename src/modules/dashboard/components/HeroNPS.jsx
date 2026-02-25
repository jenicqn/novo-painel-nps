export default function HeroNPS() {
  return (
    <div className="w-full bg-[#111827] rounded-2xl p-8 border border-[#1F2937] grid md:grid-cols-3 gap-6">

      <div>
        <p className="text-gray-400 text-sm">NPS Atual</p>
        <h1 className="text-5xl font-bold text-white">78</h1>
        <p className="text-green-400 mt-2 text-sm">+6 vs mês anterior</p>
      </div>

      <div className="md:col-span-2 flex items-center">
        <div className="w-full">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-green-400">62% Promotores</span>
            <span className="text-yellow-400">23% Neutros</span>
            <span className="text-red-400">15% Detratores</span>
          </div>

          <div className="w-full h-4 rounded-full overflow-hidden flex">
            <div className="bg-green-500 w-[62%]" />
            <div className="bg-yellow-400 w-[23%]" />
            <div className="bg-red-500 w-[15%]" />
          </div>
        </div>
      </div>

    </div>
  )
}