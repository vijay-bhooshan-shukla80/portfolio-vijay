import { AnimatePresence, motion } from "framer-motion"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { SiteShell } from "@/components/site-shell"
import HomePage from "@/pages/HomePage"
import ContactPage from "@/pages/ContactPage"
import ProjectsPage from "@/pages/ProjectsPage"
import ResumePage from "@/pages/ResumePage"
import ServicesPage from "@/pages/ServicesPage"
import TestimonialsPage from "@/pages/TestimonialsPage"
import { pageReveal } from "@/lib/motion"

export default function App() {
  const location = useLocation()

  return (
    <div className="dark min-h-screen bg-background font-sans antialiased" data-scroll-behavior="smooth">
      <SiteShell>
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} variants={pageReveal} initial="hidden" animate="show" exit="exit">
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </SiteShell>
    </div>
  )
}
