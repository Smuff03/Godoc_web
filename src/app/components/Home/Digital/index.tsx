'use client'
import React from 'react'
import Image from 'next/image'

const Digital = () => {
  return (
    <section id="Mission" className='relative py-20 bg-white overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        {/* Updated Background: Professional Medical Gradient */}
        <div className="rounded-3xl bg-gradient-to-br from-[#40826D] to-[#2E5E4E] relative overflow-hidden min-h-[500px] flex items-center">

          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('/images/digital/bg.svg')] bg-no-repeat bg-right-top"></div>

          <div className='grid grid-cols-1 lg:grid-cols-2 w-full z-10'>

            {/* COLUMN-1: Text Content */}
            <div className='py-16 px-8 lg:pl-20 flex flex-col justify-center'>
              <h2 className='text-4xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight text-center lg:text-start uppercase'>
                Our Mission
              </h2>

              <div className='text-white/90 text-lg lg:text-xl font-medium leading-relaxed text-center lg:text-start max-w-xl'>
                <p>
                  Across India, millions of patients still carry paper files and repeat the same details at every visit, while doctors struggle to see a clear picture of their history.
                  <span className="font-bold text-white"> GoDoc</span> simplifies this journey by giving every patient a single digital Health ID and a QR health card.
                </p>
                <br />
                <p>
                  We bring everything together into one easy-to-use health profile, so doctors see what they need in seconds and patients feel confident that nothing important is missed—whether in a private clinic or a medical camp.
                </p>
              </div>
            </div>

            {/* COLUMN-2: Properly Aligned Image */}
            <div className='relative hidden lg:flex items-center justify-center pr-10'>
              <div className="relative w-full h-full flex items-center justify-end">
                <Image
                  src='https://res.cloudinary.com/dioiyots5/image/upload/v1769363021/Intro-removebg-preview_mql6at.png'
                  alt='GoDoc Healthcare Illustration'
                  width={700}
                  height={600}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Digital
