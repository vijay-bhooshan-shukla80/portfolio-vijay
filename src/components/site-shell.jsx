"use client"

import { SmoothScrollProvider } from "@/components/smooth-scroll"
import { CustomCursor } from "@/components/custom-cursor"

export function SiteShell({ children }) {
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      {children}
    </SmoothScrollProvider>
  )
}
