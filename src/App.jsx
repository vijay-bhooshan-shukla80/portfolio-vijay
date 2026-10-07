import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { SiteShell } from "@/components/site-shell"
import HomePage from "@/pages/HomePage"

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen antialiased" data-scroll-behavior="smooth">
      <SiteShell>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
          <Route path="/projects" element={<HomePage />} />
          <Route path="/projects/:id" element={<HomePage />} />
          <Route path="/resume" element={<HomePage />} />
          <Route path="/services" element={<HomePage />} />
          <Route path="/testimonials" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SiteShell>
    </div>
  )
}
