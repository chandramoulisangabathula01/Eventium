// "use client"

// import React, { useRef } from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'

// export default function Circle2() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   })

//   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.8])
//   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

//   return (
//     <div ref={containerRef} className="relative min-h-[100vh] overflow-hidden">
//       <div className="sticky top-0 h-[100vh] flex items-center justify-center">
//         <motion.div 
//           className="aspect-square h-full bg-[#afb4a5]"
//           style={{
//             borderRadius: '80%',
//             position: 'absolute',
//             // left: '50%',
//             width: '100%',
            
//             top: 0,
//             transform: 'translateX(-50%)',
//             scale,
//             opacity,
//             zIndex: -1
//           }}
//         />
//       </div>
//     </div>
//   )
// }

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

  const curvePosition = useTransform(scrollYProgress, [0, 0.8, 1], ["0%", "50%", "100%"]) // Reversed the percentages
  const curvePositionX = useTransform(scrollXProgress, [0, 0.5, 1], ["0%", "50%", "100%"]) // Reversed the percentages

  return (
    <div ref={containerRef} className="relative min-h-[50vh] bg-[#f4f2ef] text-white overflow-hidden">
      <div className="sticky top-0 h-[50vh] flex flex-col justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[#afb4a5]"
          style={{
            bottom: curvePosition, // Changed from top to bottom
            left: curvePositionX,
            borderRadius: "0 0 80% 80%" // Changed radius to bottom
          }}
        >
        </motion.div>
      </div>
    </div>
  )
}