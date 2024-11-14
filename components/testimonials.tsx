/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    text: 'Our royal wedding was beyond our wildest dreams. Every detail was pure perfection!',
    author: 'Raja & Rani Kapoor',
  },
  {
    id: 2,
    text: 'They created a magical celebration that honored our heritage with unmatched elegance.',
    author: 'The Singhania Family',
  },
  {
    id: 3,
    text: 'The venue was stunning, the service impeccable, and the food divine. A royal experience that will be remembered forever.',
    author: 'The Shah Family',
  },
  // Add more testimonials as needed
]

export default function TestimonialSlider() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-light text-center mb-12 text-gray-700">TESTIMONIALS</h2>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        loop={true}
        className="relative"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="text-center px-8 md:px-16">
              <div className="text-8xl  text-gray-300 mb-4">"</div>

              <p className="text-gray-600 mb-6 text-3xl">{testimonial.text}</p>
              <p className="text-gray-500 font-light text-xl">{testimonial.author}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <ChevronLeft className="w-8 h-8 text-gray-400 hover:text-gray-600 transition-colors" />
        </div>
        <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <ChevronRight className="w-8 h-8 text-gray-400 hover:text-gray-600 transition-colors" />
        </div>
      </Swiper>
    </div>
  )
}