"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const VideoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      style={{
        scale,
        opacity
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/video/bgvideo.mp4" type="video/mp4" />

      </video>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div 
          initial={{ y: 100, opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-black font-[Cinzel] w-[60%]"
        >
          <h2 className="text-6xl font-bold mb-4">Celebrate like never before</h2>
          <p className="text-xl">We are a team of dedicated professionals who are passionate about creating unforgettable experiences for our clients. Our mission is to provide exceptional service and create lasting memories that will be cherished for years to come.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VideoSection;
