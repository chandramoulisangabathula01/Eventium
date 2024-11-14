/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
// import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { ChevronRight, MapPin, Palette, Mail, Users, Utensils, Facebook, Instagram, Twitter, Car } from 'lucide-react'
import { TabsDemo } from '@/components/gallery'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import ParallaxSection from '@/components/example'
import ParallaxSection2 from '@/components/example2'
// import LocationSection from '@/components/circle'
// import AnimatedSection from '@/components/circle'
import Circle from '@/components/circle'
import Circle2 from '@/components/circle2'
import TestimonialSlider from '@/components/testimonials'
// import ServicesSection from '@/components/services'
// import { LensDemo } from '../LensDemo/page'
import { motion, useAnimation } from 'framer-motion'
import VideoSection from '@/components/video'

export default function LandingPage() {
  const router = useRouter()
  // const [currentImage, setCurrentImage] = useState(0)
  // const images = [
  //   '/wedding/phooto.png',
  //   '/wedding/ppl.png',
  //   '/wedding/venue.png', 
  //   '/wedding/decor.png'
  // ]

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

  // const testimonials = [
  //   { name: 'Raja & Rani Kapoor',images: '/wedding/ppl.png', quote: 'Our royal wedding was beyond our wildest dreams. Every detail was pure perfection!' },
  //   { name: 'The Singhania Family',images: '/wedding/ppl.png', quote: 'They created a magical celebration that honored our heritage with unmatched elegance.' },
  // ]

  // const packages = [
  //   { name: 'Maharani', price: '₹15,00,000', features: ['5-star venue', 'Premium decor', 'Luxury guest amenities'] },
  //   { name: 'Maharaja', price: '₹25,00,000', features: ['Palace venue', 'Royal decor', 'Premium planning services'] },
  //   { name: 'Imperial', price: 'Custom', features: ['Heritage palace', 'Bespoke luxury', 'Complete royal experience'] },
  // ]

  const handleValueChange = (value: string) => {
    router.push(`/${value}`)
  }

  const [selectedFaq, setSelectedFaq] = useState<number | null>(null)
  const controls = useAnimation()

  const fadeInUp = {
    hidden: { opacity: 1, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerChildren = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="font-[Rajdhani] bg-[#f4f2ef]  text-[#2F3636]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#F4F2EF] to-[#F4EDE9] z-0" 
        />
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg3.jpg"
            alt="Royal Indian Wedding"
            width={1920}
            height={1080}
            className="blur-sm w-full h-full object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-[Cinzel] text-7xl md:text-8xl font-bold  text-[#2F3636]animate-fade-in-up">
            Royal Celebrations
            <br />
            <span className="text-3xl md:text-4xl">Where Every Moment is Majestic</span>
          </h1>
          <p className="font-[Rajdhani] text-3xl md:text-3xl mb-8 animate-fade-in-up delay-300 text-[#2F3636]">
            Creating unforgettable events worthy of royalty
          </p>
          <Select onValueChange={handleValueChange}>
            <SelectTrigger className="w-[250px] bg-[#2F3636] text-[#F4F2EF] hover:bg-[#AFB4A5] transition-colors duration-300 rounded-full border-2 border-[#AFB4A5] font-[Cinzel] text-lg">
              <SelectValue placeholder="Begin Your Journey" />
            </SelectTrigger>
            <SelectContent className="bg-[#2F3636] text-[#F4F2EF] border-2 rounded-lg border-[#AFB4A5] font-[Rajdhani]">
              <SelectItem value="wedding" className="hover:bg-[#AFB4A5] transition-colors  rounded-full duration-300">Wedding</SelectItem>
              <SelectItem value="birthday" className="hover:bg-[#AFB4A5] transition-colors  rounded-full duration-300">Birthday</SelectItem>
              <SelectItem value="others" className="hover:bg-[#AFB4A5] transition-colors  rounded-full duration-300">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="absolute bottom-0 left-100 right-0 z-10">
          <Image
            src="/couples.png"
            alt="Royal Indian Wedding"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </section>

      <section className="w-[110%] relative bg-[#e4e2e0] left-[-5%] top-[-10%]">
        <div className="bg-[#FBF9F6] transform rotate-[-3deg]">
            <p className="font-[Cinzel] font-thin text-[2vw] line-height-2  py-[3vw] px-[6vw] w-[100%] text-center text-black">
            Our service has assisted tens of thousands of couples worldwide in planning their dream weddings!
            </p>
        </div>


      </section>

      {/* About Us Section */}
      {/* <section className="py-20 bg-[#FBF9F6]">  
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image
              src="/indian-bride-royal.jpg"
              alt="Royal Indian Bride"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h2 className="font-[Cinzel] text-4xl font-bold mb-6 text-black">Our Legacy</h2>
            <p className="text-lg mb-6 text-black">
              For generations, we have been crafting extraordinary celebrations that blend timeless Indian traditions with contemporary luxury, creating weddings that are nothing short of royal affairs.
            </p>
            <p className="text-lg text-black">
              Our expertise lies in transforming your wedding dreams into magnificent realities, where every detail reflects the grandeur of India&apos;s royal heritage.
            </p>
          </div>
        </div>
      </section> */}
      <ParallaxSection />  
      <ParallaxSection2 />
      
      <Circle />

     
      {/* Services Section */}
      <section className="py-20 bg-[#afb4a5]">
        <div className="container mx-auto px-4">
          <h2 className="font-[Cinzel] text-7xl font-bold mb-12 text-center text-[#2F3636]">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#2F3636] rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-black">
                {/* <service.icon className="w-16 h-16 mb-4 text-black" /> */}
                <Image
                  src={service.images}
                  alt={service.title}
                  width={450}
                  height={150}
                  className="rounded-lg shadow-2xl border border-[#afb4a5]"
                />
                <h3 className="font-[Cinzel] text-2xl font-bold mb-2 text-[#afb4a5]">{service.title}</h3>
                <p className="text-[#afb4a5]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Circle2 />


      {/* <Circle2 />  */}

      {/* Gallery Section */}
      {/* <section className="py-20 bg-[#f4f2ef]">
        <div className="container mx-auto px-4">
          <h2 className="font-[Cinzel] text-4xl font-bold mb-12 text-center text-black">Royal Moments</h2>
          <div className="relative">
            <Image
              src={images[currentImage]}
              alt="Royal Wedding Gallery"
              width={1200}
              height={600}
              className="rounded-lg shadow-2xl mx-auto border-2 border-black"
            />
            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
              <Button
                className="bg-black hover:bg-gray-800 text-white"
                onClick={() => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              >
                <ChevronRight className="w-6 h-6 transform rotate-180" />
              </Button>
              <Button
                className="bg-black hover:bg-gray-800 text-white"
                onClick={() => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      <TabsDemo />
      <VideoSection /> 

      {/* <LensDemo /> */}

      <TestimonialSlider />


      {/* Testimonials Section
      <section className="py-20 bg-gradient-to-b from-[#F4EDE9] to-[#FBF9F6]">
        <div className="container mx-auto px-4">
          <h2 className="font-[Cinzel] text-4xl font-bold mb-12 text-center text-black">Royal Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-black">
                <CardContent className=" flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-full h-48 relative">
                    <Image
                      src={testimonial.images}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-lg shadow-2xl border border-white"
                    />
                  </div>
                  <div className="flex flex-col space-y-4">
                    <p className="text-lg text-black">&ldquo;{testimonial.quote}&rdquo;</p>
                    <p className="font-[Cinzel] font-bold text-black">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      

      {/* Packages Section */}
      {/* <section className="py-20 bg-gradient-to-b from-[#FBF9F6] to-[#F4EDE9]">
        <div className="container mx-auto px-4">
          <h2 className="font-[Cinzel] text-4xl font-bold mb-12 text-center text-black">Royal Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="bg-white border-black">
                <CardHeader>
                  <CardTitle className="font-[Cinzel] text-2xl font-bold text-black">{pkg.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-4 text-black">{pkg.price}</p>
                  <ul className="list-disc list-inside text-black">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      
      {/* FAQ Section */}
      <motion.section 
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
        className="py-20 bg-[#f4f2ef]"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2 
            variants={fadeInUp}
            className="font-[Cinzel] text-4xl font-bold mb-12 text-center text-black"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {[
              { 
                question: "How far in advance should I book?",
                answer: "We recommend booking at least 6-12 months in advance for premium dates and venues. This ensures you get your preferred choices and allows adequate time for planning."
              },
              { 
                question: "What's included in your packages?",
                answer: "Our packages are customizable but typically include venue selection, decor, catering, photography, and event coordination. The specific inclusions vary by package level."
              },
              { 
                question: "Can you accommodate destination weddings?",
                answer: "Yes! We specialize in organizing destination weddings across India's most prestigious venues and can handle all logistics including guest accommodations."
              },
              { 
                question: "How do you handle cultural traditions?",
                answer: "Our team is well-versed in various cultural wedding traditions and ceremonies. We work closely with you to ensure all customs are properly incorporated and respected."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="border border-black rounded-lg overflow-hidden bg-[#FBF9F6]"
              >
                <motion.button
                  className="w-full px-6 py-4 text-left hover:bg-[#afb4a5] transition-colors duration-200 flex justify-between items-center"
                  onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                >
                  <span className="font-[Cinzel] font-bold text-lg text-black">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: selectedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: selectedFaq === index ? "auto" : 0,
                    opacity: selectedFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 py-4 text-black font-[Rajdhani]">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* Contact Section */}
      <section className="py-20 bg-bg-[#f4f2ef] relative overflow-hidden">
        {/* <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <Image
            src="/mandala-pattern.png" 
            alt="Decorative Pattern"
            layout="fill"
            objectFit="cover"
          />
        </div> */}
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-[Cinzel] text-5xl font-bold mb-4 text-center text-black">
            Connect With Us
          </h2>
          <p className="text-center text-gray-600 mb-12 font-[Rajdhani] text-xl">
            Let us help create your perfect celebration
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-[Cinzel] font-bold text-gray-700">Your Name</label>
                  <Input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="bg-white/50 border-2 border-gray-300 focus:border-black transition-colors rounded-lg p-3" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-[Cinzel] font-bold text-gray-700">Your Email</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-white/50 border-2 border-gray-300 focus:border-black transition-colors rounded-lg p-3" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-[Cinzel] font-bold text-gray-700">Your Message</label>
                  <Textarea 
                    placeholder="Tell us about your dream celebration" 
                    className="bg-white/50 border-2 border-gray-300 focus:border-black transition-colors rounded-lg p-3 min-h-[120px]" 
                  />
                </div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white font-[Cinzel] py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Begin Your Journey
                </Button>
              </form>
            </div>
            <div className="flex flex-col justify-center items-center space-y-8">
              <div className="text-center space-y-4">
                <h3 className="font-[Cinzel] text-3xl font-bold text-black">Follow Our Royal Journey</h3>
                <p className="font-[Rajdhani] text-gray-600">Stay updated with our latest events and celebrations</p>
              </div>
              <div className="flex space-x-6">
                <Facebook className="w-10 h-10 text-black hover:text-[#AFB4A5] cursor-pointer transition-colors duration-300" />
                <Instagram className="w-10 h-10 text-black hover:text-[#AFB4A5] cursor-pointer transition-colors duration-300" />
                <Twitter className="w-10 h-10 text-black hover:text-[#AFB4A5] cursor-pointer transition-colors duration-300" />
              </div>
              <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 text-center">
                <p className="font-[Cinzel] text-xl font-bold mb-2">Contact Direct</p>
                <p className="font-[Rajdhani]">+91 98765 43210</p>
                <p className="font-[Rajdhani]">celebrations@royalindian.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer className="bg-gradient-to-b from-[#FBF9F6] to-[#F4EDE9] py-6 border-t border-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-black">&copy; 2024 Royal Indian Celebrations. Creating Legacies of Love.</p>
        </div>
      </footer>
    </div>
  )
}