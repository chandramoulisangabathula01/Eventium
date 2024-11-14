/* eslint-disable @next/next/no-img-element */
"use client"
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

const ParallaxSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true}); // Set once: false to allow re-animation
  
  // Define different parallax effects for text and image
  const imageY = useTransform(scrollYProgress, [0, 0.5], ["20%", "-40%"]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-15%"]); 
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  
  // Text reveal animation variants
  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="relative h-[100%] bg-[#F9F7F2] overflow-hidden">
      <div className="sticky top-0 flex gap-10 items-center min-h-screen">
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto p-4">
          {/* Text Section with Reveal Animation */}
          <motion.div 
            style={{ y: textY, opacity }} 
            className="flex flex-col justify-center text-left space-y-4"
          >
            <motion.h2 
              className="text-4xl font-semibold text-gray-700"
              animate={isInView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={0}
            >
              Creating magical weddings and events 
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg"
              animate={isInView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={1}
            >
              Experience the perfect blend of modern luxury and timeless elegance in our versatile venue. With state-of-the-art facilities and breathtaking architectural design, we create unforgettable moments for weddings, corporate gatherings, and celebratory events. Our space adapts seamlessly to your vision, ensuring every occasion is uniquely memorable.
            </motion.p>
            <motion.button 
              className="bg-gray-700 text-white px-8 py-3 rounded-full mt-4 hover:bg-gray-600 transition-colors w-fit"
              animate={isInView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={2}
            >
              More
            </motion.button>
          </motion.div>

          {/* Image Section with Stronger Parallax Effect */}
          <motion.div 
            style={{ y: imageY }} 
            className="overflow-hidden rounded-lg shadow-lg h-[600px]"
          >
            <img
              src="/wedding/1.png" 
              alt="Event table setup"
              className="object-cover w-full h-full scale-110"
            />
          </motion.div>

        </div>
        
      </div>
      <div ref={sectionRef} className='flex flex-col justify-center items-center mt-10 mb-10 gap-2'> 
        <motion.div 
          className="text-4xl font-semibold text-[#2F3636]"
          animate={isInView ? "visible" : "hidden"}
          variants={textRevealVariants}
          custom={3}
    >
            View More
        </motion.div>
        <motion.div 
          whileHover={{ rotate: -40 }}

          transition={{ duration: 0.5 }}
          animate={isInView ? "visible" : "hidden"}
          variants={textRevealVariants}
          custom={2}
            className='flex w-[70px] h-[70px] bg-[#2F3636] rounded-full justify-center items-center cursor-pointer'
        >
          <svg 
            viewBox="0 0 24 24" 
            className='w-8 h- text-white'
            fill="none" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={3} 
              d="M5 12h14m0 0l-7-7m7 7l-7 7"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxSection;
