/* eslint-disable @next/next/no-img-element */
"use client"
import { motion, useScroll, useTransform, useInView, easeOut } from 'framer-motion';
import { useEffect, useRef } from 'react';
// import Image from 'next/image';
import { MapPin, Palette, Mail, Users, Utensils, Car } from 'lucide-react';
import Lenis from '@studio-freight/lenis'
import Navbar from '@/components/navbar';

const ServicesSection: React.FC = () => {
  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);

  const section1InView = useInView(section1Ref, { 
    once: true, 
    amount: 0.3,
    margin: "-100px"
  });
  
  const section2InView = useInView(section2Ref, { 
    once: true, 
    amount: 0.1,
    margin: "0px 0px -200px 0px"
  });

  const section3InView = useInView(section3Ref, { 
    once: true, 
    amount: 0.1,
    margin: "0px 0px -200px 0px"
  });

  const section4InView = useInView(section4Ref, { 
    once: true, 
    amount: 0.1,
    margin: "0px 0px -200px 0px"
  });

  const section5InView = useInView(section5Ref, { 
    once: true, 
    amount: 0.1,
    margin: "0px 0px -200px 0px"
  });

  const section6InView = useInView(section6Ref, { 
    once: true, 
    amount: 0.1,
    margin: "0px 0px -200px 0px"
  });

  const section7InView = useInView(section7Ref, { 
    once: true, 
    amount: 0.1,
    margin: "0px 0px -200px 0px"
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

  const { scrollYProgress: section4Progress } = useScroll({
    target: section4Ref,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: section5Progress } = useScroll({
    target: section5Ref,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: section6Progress } = useScroll({
    target: section6Ref,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: section7Progress } = useScroll({
    target: section7Ref,
    offset: ["start end", "end start"]
  });

  const imageY1 = useTransform(section1Progress, 
    [0, 0.3, 0.5],
    ["0%", "-10%", "-15%"],
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

  const imageY4 = useTransform(section4Progress, 
    [0, 0.3, 0.5],
    ["20%", "-30%", "-40%"],
    { ease: easeOut }
  );


  const imageY5 = useTransform(section5Progress, 
    [0, 0.3, 0.5],
    ["20%", "-30%", "-40%"],
    { ease: easeOut }
  );

  const imageY6 = useTransform(section6Progress, 
    [0, 0.3, 0.5],
    ["20%", "-30%", "-40%"],
    { ease: easeOut }
  );

  const imageY7 = useTransform(section7Progress, 
    [0, 0.3, 0.5],
    ["20%", "-30%", "-40%"],
    { ease: easeOut }
  );

  const isInView = useInView(section3Ref, { once: true});

  const textY1 = useTransform(section1Progress, [0, 0.5], ["0%", "-15%"]); 
  const textY2 = useTransform(section2Progress, [0, 0.5], ["0%", "-15%"]); 
  const textY3 = useTransform(section3Progress, [0, 0.5], ["0%", "-15%"]); 
  const textY4 = useTransform(section4Progress, [0, 0.5], ["0%", "-15%"]);  
  const textY5 = useTransform(section5Progress, [0, 0.5], ["0%", "-15%"]);  
  const textY6 = useTransform(section6Progress, [0, 0.5], ["0%", "-15%"]);  
  const textY7 = useTransform(section7Progress, [0, 0.5], ["0%", "-15%"]);  
  
  const opacity1 = useTransform(section1Progress, [0, 0.5, 1], [1, 1, 0]);
  const opacity2 = useTransform(section2Progress, [0, 0.5, 1], [1, 1, 0]);
  const opacity3 = useTransform(section3Progress, [0, 0.5, 1], [1, 1, 0]);
  const opacity4 = useTransform(section4Progress, [0, 0.5, 1], [1, 1, 0]);
  const opacity5 = useTransform(section5Progress, [0, 0.5, 1], [1, 1, 0]);
  const opacity6 = useTransform(section6Progress, [0, 0.5, 1], [1, 1, 0]);
  const opacity7 = useTransform(section7Progress, [0, 0.5, 1], [1, 1, 0]);
  
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

  
const services = [
    { icon: MapPin, images: '/wedding/venue.png', title: 'Royal Venues', description: 'Select from our curated collection of majestic palaces and luxury venues.' },
    { icon: Palette, images: '/wedding/decor.png', title: 'Regal Decor', description: 'Transform spaces with opulent decor inspired by royal Indian heritage.' },
    { icon: Mail, images: '/wedding/invitations.png', title: 'Invitations', description: 'Exquisite wedding cards featuring traditional motifs and modern designs.' },
    { icon: Users, images: '/wedding/guestroom.png', title: 'Guest Rooms', description: 'Treat your guests like royalty with our premium hospitality services.' },
    { icon: Users, images: '/wedding/phooto.png', title: 'Photoshoot', description: 'Capture your special moments with our professional photographers.' },
    { icon: Utensils, images: '/wedding/food.png', title: 'Royal Cuisine', description: 'Indulge in a feast fit for kings with our gourmet Indian delicacies.' },
    { icon: Users, images: '/wedding/ppl.png', title: 'Guest Experience', description: 'Treat your guests like royalty with our premium hospitality services.' },
    { icon: Palette, images: '/wedding/planning.png', title: 'Wedding Planner', description: 'Our expert planners ensure every detail is perfect, from start to finish.' },
    { icon: Car, images: '/wedding/parking.png', title: 'Parking', description: 'We provide ample parking for your guests, ensuring a smooth arrival and departure.' },
  ]

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
    
    <div ref={containerRef} className="relative h-[100%] bg-[#2F3636] overflow-hidden">
      <Navbar />

        <div className='flex flex-col justify-center mt-20 mb-20 h-[50vh] items-center'>
          <h1 className='text-8xl flex font-semibold text-[#AFB4A5]'> Our </h1>
          <h1 className='text-8xl flex font-semibold text-[#AFB4A5]'> Services</h1>
        </div>

        {/* section 1 */}
      <div className="sticky top-0 flex gap-10 items-center min-h-screen">
        <div ref={section1Ref} className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto p-4 mt-20">
          <motion.div 
            style={{ y: section1InView ? imageY1 : 0, rotate: 5 }} 
            className="overflow-hidden rounded-lg shadow-lg h-[600px]"
          >
            <img
              src={services[1].images}
              alt={services[1].title}
              className="object-cover w-full h-full scale-110"
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
              {services[1].title}
            </motion.h2>
            <motion.p 
              className="text-gray-200 text-lg"
              initial="hidden"
              animate={section1InView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={1}
            >
              {services[1].description}
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
                className='w-8 h-8 text-[#2F3636]'
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

      {/* section 2 */}

      <div className="sticky top-0 flex gap-10 items-center min-h-screen">
        <div ref={section2Ref} className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto p-4 mt-20">
          

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
              {services[2].title}
            </motion.h2>
            <motion.p 
              className="text-gray-200 text-lg"
              initial="hidden"
              animate={section2InView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={1}
            >
              {services[2].description}
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
                className='w-8 h-8 text-[#2F3636]'
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
              src={services[2].images}
              alt={services[2].title}
              className="object-cover w-full h-full scale-110"
            />
          </motion.div>

        </div>
      </div>

      {/* section 3 */}


      <div className="sticky top-0 flex gap-10 items-center min-h-screen">
        <div ref={section3Ref} className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto p-4 mt-20">
          <motion.div 
            style={{ y: section3InView ? imageY3 : 0, rotate: 5 }} 
            className="overflow-hidden rounded-lg shadow-lg h-[600px]"
          >
            <img
              src={services[3].images}
                alt={services[3].title}
              className="object-cover w-full h-full scale-110"
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
                {services[3].title}
            </motion.h2>
            <motion.p 
              className="text-gray-200 text-lg"
              initial="hidden"
              animate={section3InView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={1}
            >
              {services[3].description}
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
                className='w-8 h-8 text-[#2F3636]'
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

      {/* section 4 */}
      <div className="sticky top-0 flex gap-10 items-center min-h-screen">
        <div ref={section4Ref} className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto p-4 mt-20">
          

          <motion.div 
            style={{ y: section4InView ? textY4 : 0, opacity: section4InView ? opacity4 : 1 }} 
            className="flex flex-col justify-center text-left space-y-4"
          >
            <motion.h2 
              className="text-4xl font-semibold text-[#AFB4A5]"
              initial="hidden"
              animate={section4InView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={0}
            >
              {services[4].title}
            </motion.h2>
            <motion.p 
              className="text-gray-200 text-lg"
              initial="hidden"
              animate={section4InView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={1}
            >
              {services[4].description}
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
                className='w-8 h-8 text-[#2F3636]'
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
            style={{ y: section4InView ? imageY4 : 0, rotate: -5 }} 
            className="overflow-hidden rounded-lg shadow-lg h-[600px]"
          >
            <img
              src={services[4].images}
                alt={services[4].title}
              className="object-cover w-full h-full scale-110"
            />
          </motion.div>
        </div>
      </div>

      {/* section 5 */}
      <div className="sticky top-0 flex gap-10 items-center min-h-screen">
        <div ref={section5Ref} className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto p-4 mt-20">
          <motion.div 
            style={{ y: section5InView ? imageY5 : 0, rotate: 5 }} 
            className="overflow-hidden rounded-lg shadow-lg h-[600px]"
          >
            <img
              src={services[5].images}
                alt={services[5].title}
              className="object-cover w-full h-full scale-110"
            />
          </motion.div>

          <motion.div 
            style={{ y: section5InView ? textY5 : 0, opacity: section5InView ? opacity5 : 1 }} 
            className="flex flex-col justify-center text-left space-y-4"
          >
            <motion.h2 
              className="text-4xl font-semibold text-[#AFB4A5]"
              initial="hidden"
              animate={section5InView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={0}
            >
              {services[5].title}
            </motion.h2>
            <motion.p 
              className="text-gray-200 text-lg"
              initial="hidden"
              animate={section5InView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={1}
            >
              {services[5].description}
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
                className='w-8 h-8 text-[#2F3636]'
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

      {/* section 6 */}

      <div className="sticky top-0 flex gap-10 items-center min-h-screen">
        <div ref={section6Ref} className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto p-4 mt-20">
          

          <motion.div 
            style={{ y: section6InView ? textY6 : 0, opacity: section6InView ? opacity6 : 1 }} 
            className="flex flex-col justify-center text-left space-y-4"
          >
            <motion.h2 
              className="text-4xl font-semibold text-[#AFB4A5]"
              initial="hidden"
              animate={section6InView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={0}
            >
              {services[6].title}
            </motion.h2>
            <motion.p 
              className="text-gray-200 text-lg"
              initial="hidden"
              animate={section6InView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={1}
            >
              {services[6].description}
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
                className='w-8 h-8 text-[#2F3636]'
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
            style={{ y: section6InView ? imageY6 : 0, rotate: -5 }} 
            className="overflow-hidden rounded-lg shadow-lg h-[600px]"
          >
            <img
              src={services[6].images}
                alt={services[6].title}
              className="object-cover w-full h-full scale-110"
            />
          </motion.div>
        </div>
      </div>

      {/* section 7 */}
      
      <div className="sticky top-0 flex gap-10 items-center min-h-screen">
        <div ref={section7Ref} className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto p-4 mt-20">
          <motion.div 
            style={{ y: section7InView ? imageY7 : 0, rotate: 5 }} 
            className="overflow-hidden rounded-lg shadow-lg h-[600px]"
          >
            <img
              src={services[7].images}
              alt={services[7].title}
              className="object-cover w-full h-full scale-110"
            />
          </motion.div>

          <motion.div 
            style={{ y: section7InView ? textY7 : 0, opacity: section7InView ? opacity7 : 1 }} 
            className="flex flex-col justify-center text-left space-y-4"
          >
            <motion.h2 
              className="text-4xl font-semibold text-[#AFB4A5]"
              initial="hidden"
              animate={section7InView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={0}
            >
              {services[7].title}
            </motion.h2>
            <motion.p 
              className="text-gray-200 text-lg"
              initial="hidden"
              animate={section7InView ? "visible" : "hidden"}
              variants={textRevealVariants}
              custom={1}
            >
              {services[7].description}
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
                className='w-8 h-8 text-[#2F3636]'
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

export default ServicesSection;

