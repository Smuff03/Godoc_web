'use client'
import React from 'react'
import Link from 'next/link'

const Beliefs = () => {
  return (
    <section className='bg-cover bg-center overflow-hidden'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {/* COLUMN-1 */}

          <div className="bg-purple pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-[url('https://res.cloudinary.com/dioiyots5/image/upload/v1769423536/camp_bg_c1zisg.png')] bg-no-repeat bg-right-bottom">
            <p className='text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start uppercase'>
              Free Checks
            </p>
            <h3 className='text-white mb-5 text-center sm:text-start'>
              Camps {' '}
              <span className='text-white/60'>
                you never miss
              </span>
            </h3>
            <p className='text-lg text-white/75 pt-2 mb-16 text-center sm:text-start'>
              The Camps section displays upcoming medical camps with complete details like name, date, time, address, contact, and specialization.
              You can pre-register in advance so your details are ready on arrival, making it easier for patients to attend on time and helping organizers manage crowds smoothly.
            </p>
            <div className='text-center sm:text-start'>
              <Link
                href='#'
                className='text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full duration-300 bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                Download Now
              </Link>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className=''>
            <div className="bg-[#D6FFEB] pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-[url('https://res.cloudinary.com/dioiyots5/image/upload/v1769423537/time_line_bg_bbm8v5.png')] bg-no-repeat bg-bottom">
              <p className='text-lg font-normal text-primary tracking-widest mb-5 text-center sm:text-start uppercase'>
                Health History
              </p>
              <h3 className='text-black mb-5 text-center sm:text-start'>
                Health <span className='text-primary'>  Visit Timeline</span>
              </h3>
              <p className='pt-2 mb-16 text-center sm:text-start text-black/75 text-lg'>
                GoDoc maintains a clear, organized timeline of all your doctor visits and medical camps, showing details like doctor name, date, time, and visit status. You can also view camp records along with doctors’ notes, making it easy to revisit past consultations and medical advice without relying on old papers or messages.
              </p>
              <div className='text-center sm:text-start'>
                <Link
                  href='#'
                  className='text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-primary border border-primary hover:bg-darkmode hover:border-darkmode'>
                  Try Yourself
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Beliefs
