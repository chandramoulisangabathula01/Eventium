// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import styles from "./scrolleffect.module.css";

// gsap.registerPlugin(ScrollTrigger);

// export default function ScrollEffect() {
//   useEffect(() => {
//     // Hero section animation timeline
//     gsap.timeline({
//       scrollTrigger: {
//         trigger: ".hero-section",
//         start: "top top", 
//         end: "bottom center",
//         scrub: true,
//         markers: false,
//       },
//     })
//     .to(".hero-bg", {
//       scale: 1.1,
//       opacity: 0.3,
//       duration: 1,
//       ease: "power1.inOut"
//     })
//     .to(".hero-content", {
//       y: 100,
//       opacity: 0,
//       duration: 1,
//       ease: "power1.inOut" 
//     }, "<");

//     // Gradient animation
//     gsap.to(".hero-gradient", {
//       scrollTrigger: {
//         trigger: ".hero-section",
//         start: "top top",
//         end: "bottom center", 
//         scrub: true
//       },
//       opacity: 0.8,
//       duration: 1
//     });

//   }, []);

//   return (
//     <section className="hero-section h-screen flex items-center justify-center overflow-hidden">
//       <div className="hero-gradient absolute inset-0 bg-gradient-to-b from-[#FBF9F6] to-[#F4EDE9]" />
      
//       <Image
//         src="/royal-indian-wedding.jpg"
//         alt="Royal Indian Wedding"
//         width={1920}
//         height={1080}
//         className="hero-bg absolute inset-0 w-full h-full object-cover opacity-40"
//         priority
//       />

//       <div className="hero-content relative z-10 flex flex-col items-center justify-center text-center px-4">
//         <h1 className="font-[Cinzel] text-6xl md:text-8xl font-bold mb-4 text-black animate-fade-in-up">
//           Royal Indian Weddings
//           <br />
//           <span className="text-4xl md:text-6xl">Where Dreams Meet Tradition</span>
//         </h1>
//         <p className="font-[Rajdhani] text-xl md:text-2xl mb-8 animate-fade-in-up delay-300 text-black">
//           Creating magnificent celebrations worthy of royalty
//         </p>
//         <button className="bg-black hover:bg-black text-white font-bold py-3 px-8 rounded-full text-lg animate-fade-in-up delay-500">
//           Begin Your Royal Journey
//         </button>
//       </div>
//     </section>
//   );
// }
