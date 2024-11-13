/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LocationSection: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Transform values for upward clay effect starting from center
  const height = useTransform(scrollYProgress, [0.3, 1], ["50vh", "100vh"]);
  const width = useTransform(scrollYProgress, [0.3, 1], ["100%", "100vw"]);
  const yPosition = useTransform(scrollYProgress, [0.3, 0.7], ["*50%", "30%"]);
  const borderTopRadius = useTransform(scrollYProgress, [0.3, 0.7], ["50%", "50%"]);
  const scaleY = useTransform(scrollYProgress, [0.3, 0.7], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [1, 0.95, 0.9]);

  return (
    <div className="relative h-[200vh] bg-[#f9f7f2] overflow-hidden">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* The half-circle clay that gets pushed up from center */}
        <motion.div
          className="absolute bg-[#2F3636]"
          style={{
            width,
            height,
            top: "0%", // Start from center
            left: 0,
            scaleY,
            opacity,
            borderTopLeftRadius: borderTopRadius,
            borderTopRightRadius: borderTopRadius,
            transformOrigin: "bottom", // Change origin to bottom for upward movement
            transform: `translateY(${yPosition})`
          }}
        />
        
        <div className="relative z-10 text-center text-white h-screen flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">Our Location</h2>
          <p className="text-xl">Find us in the heart of Thessaloniki</p>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
