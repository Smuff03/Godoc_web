'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Digital = () => {
  return (
    <section className='relative bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className="rounded-3xl bg-primary bg-[url('/images/digital/bg.svg')] bg-no-repeat bg-right-top lg:pb-60 pb-32 relative">
          <div className='grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2'>
            {/* COLUMN-1 */}
            <div className='pt-24 lg:pl-24'>
              <p className='text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start uppercase mt-5'>
                Our Mission
              </p>
              <h5 className='text-white mb-8 font-medium leading-8 text-center lg:text-start lg:w-full'>
                Across India, millions of patients still carry paper files and repeat the same details at every visit, while doctors struggle to see a clear picture of their history in the few minutes they get together. GoDOC simplifies this journey by giving every patient a single digital Health ID, a QR health card, and a connected record that works the same way in clinics and medical camps.
                <br />
                <br />
                Modern healthcare moves fast, but patient information often gets left behind in files, photos, and scattered apps. GoDOC brings everything together into one easy‑to‑use health profile, so doctors see what they need in seconds and patients feel confident that nothing important will be missed.
              </h5>

            </div>
          </div>
          {/* COLUMN-2 */}
          <div className='absolute bottom-16 -right-20 xl:block hidden'>
            <Image
              src='/images/digital/girldoodle.svg'
              alt='doodle'
              width={815}
              height={691}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Digital
