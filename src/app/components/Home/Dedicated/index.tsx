'use client'
import React from 'react'
import Image from 'next/image'

const Dedicated = () => {
  return (
    <section id="About" className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
          <Image
            src='/images/dedicated/spiral.svg'
            height={272}
            width={686}
            alt='spiral-design'
            className='absolute left-0 top-0 hidden lg:block -z-10'
          />
          {/* Left Column */}
          <div className='col-span-12 lg:col-span-6 justify-self-center'>
            <Image
              src='/images/dedicated/man.svg'
              alt='man-icon'
              width={416}
              height={530}
              className='mx-auto md:mx-0'
            />
          </div>

          {/* Right Column */}
          <div className='col-span-12 lg:col-span-6'>
            <div className='relative'>
              <Image
                src='/images/dedicated/comma.svg'
                alt='comma-image'
                width={200}
                height={106}
                className='absolute -top-16 -left-32 hidden lg:block'
              />
            </div>
            <h4 className='text-center -mr-1 lg:text-start lg:leading-15 leading-14'>
              GoDOC is designed to quietly handle the complicated parts of healthcare so that patients can focus on feeling better, not on filling forms.”
            </h4>
            <p className='text-xl font-medium text-black/55 mt-5 text-center lg:text-start'>
              Turns every check‑up into one connected story, so your care is always ready when you need it, wherever you are
            </p>
            <h5 className='mt-12 lg:pl-32 relative lg:before:block before:hidden before:absolute before:bg-black before:h-0.5 before:w-24 before:left-0 before:bottom-1/2 text-center lg:text-start'>
              Samarth khade, Founder
            </h5>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Dedicated
