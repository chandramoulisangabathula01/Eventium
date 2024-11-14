"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Circle() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const { scrollXProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const curvePosition = useTransform(scrollYProgress, [0, 0.8, 1], ["0%", "80%", "100%"]) // Changed initial position to 0%
  const curvePositionX = useTransform(scrollXProgress, [0, 0.5, 1], ["0%", "50%", "100%"]) // Changed initial position to 0%
  // const textOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1])
  // const textPosition = useTransform(scrollYProgress, [0.3, 0.7], ["50%", "100%"])

  // const textPositionX = useTransform(scrollXProgress, [0.3, 0.7], ["60%", "50%"])

  return (
    <div ref={containerRef} className="relative min-h-[50vh] bg-[rgb(47,54,54)] text-white overflow-hidden">
      <div className="sticky top-0 h-[50vh] flex flex-col justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[#afb4a5]"
          style={{
            top: curvePosition,
            left: curvePositionX,
            borderRadius: "80% 80% 0 0"
          }}
        >
          {/* <div 
            className="h-[50vh] flex items-center justify-center"
          >
            <h2 className="text-gray-900 text-4xl font-bold text-center">
              PLANETARIUM
            </h2>
          </div> */}
        </motion.div>
      </div>
    </div>
  )
}