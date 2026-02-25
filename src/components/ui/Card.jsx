export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-[#111827] border border-[#1F2937] rounded-xl p-6 ${className}`}>
      {children}
    </div>
  )
}