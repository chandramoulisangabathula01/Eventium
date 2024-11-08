"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { ChevronRight, MapPin, Palette, Mail, Users, Utensils, Facebook, Instagram, Twitter, Car } from 'lucide-react'
// import { TabsDemo } from '@/components/gallery'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
// import { LensDemo } from '../LensDemo/page'

export default function LandingPage() {
  const router = useRouter()
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    '/wedding/phooto.png',
    '/wedding/ppl.png',
    '/wedding/venue.png', 
    '/wedding/decor.png'
  ]

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

  const testimonials = [
    { name: 'Raja & Rani Kapoor',images: '/wedding/ppl.png', quote: 'Our royal wedding was beyond our wildest dreams. Every detail was pure perfection!' },
    { name: 'The Singhania Family',images: '/wedding/ppl.png', quote: 'They created a magical celebration that honored our heritage with unmatched elegance.' },
  ]

  const packages = [
    { name: 'Maharani', price: '₹15,00,000', features: ['5-star venue', 'Premium decor', 'Luxury guest amenities'] },
    { name: 'Maharaja', price: '₹25,00,000', features: ['Palace venue', 'Royal decor', 'Premium planning services'] },
    { name: 'Imperial', price: 'Custom', features: ['Heritage palace', 'Bespoke luxury', 'Complete royal experience'] },
  ]

  const handleValueChange = (value: string) => {
    router.push(`/${value}`)
  }

  return (
    <div className="font-[Rajdhani] text-black overflow-hidden  overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#FBF9F6] to-[#F4EDE9]"
        />
        <Image
          src="/bg3.jpg"
          alt="Royal Indian Wedding"
          width={1920}
          height={1080}
          className="absolute blur-sm inset-0 w-full h-full object-cover opacity-40"
          priority
        />
        <div className="relative z-10  flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-[Cinzel] text-6xl md:text-7xl font-bold mb-4 text-black animate-fade-in-up">
            Royal Celebrations
            <br />
            <span className="text-3xl md:text-4xl">Where Every Moment is Majestic</span>
          </h1>
          <p className="font-[Rajdhani] text-xl md:text-xl mb-8 animate-fade-in-up delay-300 text-black">
            Creating unforgettable events worthy of royalty
          </p>
          <Select onValueChange={handleValueChange}>
            <SelectTrigger className="w-[200px] bg-black text-white hover:bg-black">
              <SelectValue placeholder="Begin Your Royal Journey" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="birthday">Birthday</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0">
          <Image
            src="/couples.png"
            alt="Royal Indian Wedding"
            width={500}
            height={500}
            className=" object-cover"
          />
        </div> */}
        <div className="absolute bottom-0 left-100 right-0">
          <Image
            src="/couples.png"
            alt="Royal Indian Wedding"
            width={500}
            height={500}
            className=" object-cover"
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

      {/* Services Section */}
      <section className="py-20 bg-[#FBF9F6]">
        <div className="container mx-auto px-4">
          <h2 className="font-[Cinzel] text-4xl font-bold mb-12 text-center text-black">Royal Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#F4EDE9] rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-black">
                {/* <service.icon className="w-16 h-16 mb-4 text-black" /> */}
                <Image
                  src={service.images}
                  alt={service.title}
                  width={450}
                  height={150}
                  className="rounded-lg shadow-2xl border border-white"
                />
                <h3 className="font-[Cinzel] text-2xl font-bold mb-2 text-black">{service.title}</h3>
                <p className="text-black">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-[#F4EDE9] to-[#FBF9F6]">
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
      </section>
      {/* <TabsDemo /> */}
      {/* <LensDemo /> */}

      {/* Testimonials Section */}
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
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-to-b from-[#FBF9F6] to-[#F4EDE9]">
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
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-[#F4EDE9] to-[#FBF9F6]">
        <div className="container mx-auto px-4">
          <h2 className="font-[Cinzel] text-4xl font-bold mb-12 text-center text-black">Connect With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" className="bg-white border-black text-black" />
                <Input type="email" placeholder="Your Email" className="bg-white border-black text-black" />
                <Textarea placeholder="Your Message" className="bg-white border-black text-black" />
                <Button className="bg-black hover:bg-gray-800 text-white font-bold">Send Message</Button>
              </form>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-[Cinzel] text-2xl font-bold mb-4 text-black">Follow Our Royal Journey</h3>
              <div className="flex space-x-4">
                <Facebook className="w-8 h-8 text-black hover:text-gray-800 cursor-pointer" />
                <Instagram className="w-8 h-8 text-black hover:text-gray-800 cursor-pointer" />
                <Twitter className="w-8 h-8 text-black hover:text-gray-800 cursor-pointer" />
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