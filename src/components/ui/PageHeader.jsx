export default function PageHeader({ title, subtitle }) {
  return (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && (
        <p className="text-gray-400 mt-1">{subtitle}</p>
      )}
    </div>
  )
}