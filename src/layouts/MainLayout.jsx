import { Outlet, NavLink } from "react-router-dom"
import { useStore } from "../context/StoreContext"

export default function MainLayout() {
  const { stores, activeStore, changeStore } = useStore()

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "hover:bg-[#1F2937] text-gray-400"
    }`

  return (
    <div className="flex min-h-screen bg-[#0F172A] text-gray-200">

      <aside className="w-64 bg-[#0B1220] border-r border-[#1F2937] p-6 flex flex-col">

        <h2 className="text-lg font-semibold mb-4">
          {activeStore?.name || "Carregando..."}
        </h2>

        <select
          value={activeStore?.id || ""}
          onChange={(e) => changeStore(e.target.value)}
          className="mb-6 bg-[#111827] border border-[#1F2937] rounded-lg px-2 py-2 text-sm"
        >
          {stores.map((store) => (
            <option key={store.id} value={store.id}>
              {store.name}
            </option>
          ))}
        </select>

        <nav className="space-y-2 text-sm">
          <NavLink to="/" end className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/analytics" className={linkClass}>
            Analytics
          </NavLink>
          <NavLink to="/feedback" className={linkClass}>
            Feedback
          </NavLink>
          <NavLink to="/alerts" className={linkClass}>
            Alerts
          </NavLink>
          <NavLink to="/reports" className={linkClass}>
            Reports
          </NavLink>
          <NavLink to="/team" className={linkClass}>
            Team
          </NavLink>
          <NavLink to="/settings" className={linkClass}>
            Settings
          </NavLink>
          <NavLink to="/billing" className={linkClass}>
            Billing
          </NavLink>
        </nav>

        <div className="mt-auto text-xs text-gray-500">
          Multi-Tenant Base
        </div>

      </aside>

      <main className="flex-1 p-10 overflow-auto">
        <Outlet />
      </main>

    </div>
  )
}