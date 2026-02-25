import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

import Dashboard from "../modules/dashboard/Dashboard"
import Analytics from "../modules/analytics/Analytics"
import Feedback from "../modules/feedback/Feedback"
import Alerts from "../modules/alerts/Alerts"
import Reports from "../modules/reports/Reports"
import Team from "../modules/team/Team"
import Settings from "../modules/settings/Settings"
import Billing from "../modules/billing/Billing"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="reports" element={<Reports />} />
          <Route path="team" element={<Team />} />
          <Route path="settings" element={<Settings />} />
          <Route path="billing" element={<Billing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}