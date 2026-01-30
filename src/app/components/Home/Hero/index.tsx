'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'

const Hero = () => {
  const leftAnimation = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  const rightAnimation = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  // UPDATED: Standard Direct Download URL from GitHub Releases
  const APK_URL = "https://github.com/Smuff03/Godoc_web/releases/download/v0.0.1/godoc_Beta.apk";

  return (
    <section className='relative overflow-hidden z-1'>
      <div className='container mx-auto pt-24 max-w-7xl px-4'>
        <div className='grid grid-cols-12 justify-center items-center'>
          <div className='col-span-12 xl:col-span-5 lg:col-span-6 md:col-span-12 sm:col-span-12'>

            <div className='flex items-center gap-4 mb-6'>
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
              </span>
              <p className='text-primary text-2xl md:text-3xl font-black uppercase tracking-tighter'>
                Beta version is live
              </p>
            </div>

            <div className='py-2 px-5 bg-primary/15 rounded-full w-fit'>
              <p className='text-primary text-lg font-bold'>Heal with cure</p>
            </div>

            <h1 className='mt-5 text-4xl md:text-6xl font-extrabold text-black dark:text-white leading-tight'>
              YOUR HEALTH, <br />
              <span className="text-primary">ONE TAP AWAY</span>
            </h1>

            {/* FIXED: Using standard <a> instead of <Link> for external 93MB download 
              to avoid "Failed to fetch" errors triggered by Next.js client routing.
            */}
            <div className="mt-10">
              <a
                href={APK_URL}
                download="GoDoc_v1.apk"
                className="inline-block"
              >
                <button className='bg-primary text-white text-xl font-semibold py-5 px-12 rounded-full hover:bg-darkmode hover:cursor-pointer transition-all active:scale-95'>
                  Download for Android
                </button>
              </a>
              <p className='text-gray-400 text-sm mt-3 ml-2'>
                Version 0.0.1-beta • 93 MB
              </p>
            </div>
          </div>

          <div className='xl:col-span-7 lg:col-span-6 lg:block hidden'>
            <motion.div {...rightAnimation}>
              <Image
                src='https://res.cloudinary.com/dioiyots5/image/upload/v1769424231/hero_atuzsm.png'
                alt='GoDoc App Preview'
                width={700}
                height={700}
                priority
                className='w-full'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;