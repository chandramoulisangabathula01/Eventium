"use client"
import { useEffect } from "react";
import LandingPage from "./LandingPage/page";
import Navbar from "@/components/navbar";
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // smooth: true,
      // smoothTouch: false,
      // touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <motion.div 
      className="bg-[#FBF9F6]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Navbar />
      <LandingPage />
    </motion.div>
  );
}
