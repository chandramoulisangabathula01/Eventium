/* eslint-disable @next/next/no-img-element */
"use client"
import { motion, useScroll, useTransform, useInView, easeOut } from 'framer-motion';
import { useRef } from 'react';

const ParallaxSection2: React.FC = () => {
  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const section1InView = useInView(section1Ref, { 
    once: true, 
    amount: 0.3,
    margin: "-100px"
  });
  
  const section2InView = useInView(section2Ref, { 
    once: true, 
    amount: 0.1, // Reduced amount to trigger when just entering viewport
    margin: "0px 0px -200px 0px" // Negative bottom margin to trigger earlier
  });

  const section3InView = useInView(section3Ref, { 
    once: true, 
    amount: 0.1, // Reduced amount to trigger when just entering viewport
    margin: "0px 0px -200px 0px" // Negative bottom margin to trigger earlier
  });

  const { scrollYProgress: section1Progress } = useScroll({
    target: section1Ref,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: section2Progress } = useScroll({
    target: section2Ref,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: section3Progress } = useScroll({
    target: section3Ref,
    offset: ["start end", "end start"]
  });

  // Define different parallax effects for text and image with faster initial movement
  const imageY1 = useTransform(section1Progress, 
    [0, 0.3, 0.5],
    ["0%", "-10%", "-15%"], // Reduced movement for first image
    { ease: easeOut }
  );

  const imageY2 = useTransform(section2Progress, 
    [0, 0.3, 0.5],
    ["20%", "-30%", "-40%"],
    { ease: easeOut }
  );

  const imageY3 = useTransform(section3Progress, 
    [0, 0.3, 0.5],
    ["20%", "-30%", "-40%"],
    { ease: easeOut }
  );


  const isInView = useInView(section3Ref, { once: true}); // Set once: false to allow re-animation

  const textY1 = useTransform(section1Progress, [0, 0.5], ["0%", "-15%"]); 
  const textY2 = useTransform(section2Progress, [0, 0.5], ["0%", "-15%"]); 
  const textY3 = useTransform(section3Progress, [0, 0.5], ["0%", "-15%"]); 
  
  const opacity1 = useTransform(section1Progress, [0, 0.5, 1], [1, 1, 0]);
  const opacity2 = useTransform(section2Progress, [0, 0.5, 1], [1, 1, 0]);
  const opacity3 = useTransform(section3Progress, [0, 0.5, 1], [1, 1, 0]);
  
  // Text reveal animation variants
  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4,
        duration: 0.5,
        ease: "easeInOut"
      }
    })
  };

  return (
    <div ref={containerRef} className="relative h-[100%] bg-[#2F3636] overflow-hidden">


        {/* wedding section */}


      <div className="sticky top-0 flex gap-10 items-center min-h-screen">
        <div ref={section1Ref} className="grid  grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto p-4 mt-20">
          <motion.div 
            style={{ y: section1InView ? imageY1 : 0, rotate: 5 }} 
            className="overflow-hidden rounded-lg shadow-lg h-[600px]"
          >
            <img
              src="/wedding/1.png" 
              alt="Event table setup"
              className="object-cover w-full h-full  scale-110"
            />
          </motion.div>

          <motion.div 
            style={{ y: section1InView ? textY1 : 0, opacity: section1InView ? opacity1 : 1 }} 
            className="flex flex-col justify-center text-left space-y-4"
          >
            <motion.h2 
              className="text-4xl font-semibold text-[#AFB4A5]"
              initial="hidden"
              animate={section1InView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={0}
            >
              WEDDING
            </motion.h2>
            <motion.p 
              className="text-gray-200 text-lg"
              initial="hidden"
              animate={section1InView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={1}
            >
Plan your dream wedding in Thessaloniki at a breathtaking
venue with panoramic view that will steal the show and
leave unforgettable memories for you and your guests.            </motion.p>
<motion.div 
          whileHover={{ rotate: -40 }}

          transition={{ duration: 0.5 }}
          animate={isInView ? "visible" : "hidden"}
          variants={textRevealVariants}
          custom={2}
          className='flex w-[70px] h-[70px] bg-[#AFB4A5] rounded-full justify-center items-center cursor-pointer'
        >
          <svg 
            viewBox="0 0 24 24" 
            className='w-8 h-8 text-[#2F3636] '
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
          </motion.div>
        </div>
      </div>


      {/* kids party section */}

      
      <div className="sticky top-0 flex gap-10 items-center min-h-screen">
        <div ref={section2Ref} className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto p-4">
          <motion.div 
            style={{ y: section2InView ? textY2 : 0, opacity: section2InView ? opacity2 : 1 }} 
            className="flex flex-col justify-center text-left space-y-4"
          >
            <motion.h2 
              className="text-4xl font-semibold text-[#AFB4A5]"
              initial="hidden"
              animate={section2InView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={0}
            >
KIDS PARTY            </motion.h2>
            <motion.p 
              className="text-gray-200 text-lg"
              initial="hidden"
              animate={section2InView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={1}
            >
              A unique location in Thessaloniki that offers a magical and unforgettable experience for your children.
            </motion.p>
            <motion.div 
          whileHover={{ rotate: -40 }}

          transition={{ duration: 0.5 }}
          animate={isInView ? "visible" : "hidden"}
          variants={textRevealVariants}
          custom={2}
          className='flex w-[70px] h-[70px] bg-[#AFB4A5] rounded-full justify-center items-center cursor-pointer'
        >
          <svg 
            viewBox="0 0 24 24" 
            className='w-8 h-8 text-[#2F3636] '
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
          </motion.div>

          <motion.div 
            style={{ y: section2InView ? imageY2 : 0, rotate: -5 }} 
            className="overflow-hidden rounded-lg shadow-lg h-[600px]"
          >
            <img
              src="/wedding/2.png" 
              alt="Event table setup"
              className="object-cover w-full h-full scale-110"
            />
          </motion.div>
        </div>
      </div>




      {/* corporate section */}

      <div className="sticky top-0 flex gap-10 items-center min-h-screen">
        <div ref={section3Ref} className="grid  grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto p-4 mt-20">
          <motion.div 
            style={{ y: section3InView ? imageY3 : 0, rotate: 5 }} 
            className="overflow-hidden rounded-lg shadow-lg h-[600px]"
          >
            <img
              src="/wedding/5.png" 
              alt="Event table setup"
              className="object-cover w-full h-full  scale-110"
            />
          </motion.div>

          <motion.div 
            style={{ y: section3InView ? textY3 : 0, opacity: section3InView ? opacity3 : 1 }} 
            className="flex flex-col justify-center text-left space-y-4"
          >
            <motion.h2 
              className="text-4xl font-semibold text-[#AFB4A5]"
              initial="hidden"
              animate={section3InView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={0}
            >
              CORPORATE
            </motion.h2>
            <motion.p 
              className="text-gray-200 text-lg"
              initial="hidden"
              animate={section3InView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={1}
            >
              A unique location in Thessaloniki that offers a magical and unforgettable experience for your children.
            </motion.p>
            <motion.div 
          whileHover={{ rotate: -40 }}

          transition={{ duration: 0.5 }}
          animate={isInView ? "visible" : "hidden"}
          variants={textRevealVariants}
          custom={2}
          className='flex w-[70px] h-[70px] bg-[#AFB4A5] rounded-full justify-center items-center cursor-pointer'
        >
          <svg 
            viewBox="0 0 24 24" 
            className='w-8 h-8 text-[#2F3636] '
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
          </motion.div>
        </div>
      </div>



    </div>
  );
};

export default ParallaxSection2;
