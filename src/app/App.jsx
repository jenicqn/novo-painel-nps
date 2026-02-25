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
import { useAuth } from "../context/AuthContext"
import Login from "../pages/Login"
import MainLayout from "../layouts/MainLayout"

export default function App() {
  const { user } = useAuth()

  if (!user) {
    return <Login />
  }

  return <MainLayout />
}