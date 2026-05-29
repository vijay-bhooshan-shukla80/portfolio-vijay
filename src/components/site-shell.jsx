"use client"

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { CustomCursor } from "@/components/custom-cursor"
import { ScrollProgress } from "@/components/scroll-progress"

export function SiteShell({ children }) {
  const location = useLocation()
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <>
      <ScrollProgress />
      {isMounted && !isMobile ? <CustomCursor /> : null}
      {children}
    </>
  )
}
