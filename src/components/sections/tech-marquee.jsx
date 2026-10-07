"use client"

import { motion } from "framer-motion"

const techItems = [
  "REACT.JS",
  "NODE.JS",
  "EXPRESS.JS",
  "MONGODB",
  "JAVASCRIPT",
  "PYTHON",
  "SELENIUM WEBDRIVER",
  "N8N WORKFLOWS",
  "REST APIS",
  "GIT & GITHUB",
  "SERVER DEPLOYMENT",
  "CHROMEDRIVER",
  "AI INTEGRATION",
]

export function TechMarquee() {
  return (
    <div className="relative py-6 bg-[#C43F16] border-y border-white/20 overflow-hidden text-white">
      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
        {[...techItems, ...techItems, ...techItems].map((item, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className="font-heading text-lg sm:text-2xl font-black tracking-wider hover:opacity-80 transition-opacity cursor-default">
              {item}
            </span>
            <span className="text-xl text-white/60">✽</span>
          </div>
        ))}
      </div>
    </div>
  )
}
