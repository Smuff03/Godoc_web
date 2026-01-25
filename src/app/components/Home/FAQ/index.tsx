'use client'
import React from 'react'
import { Icon } from '@iconify/react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => (
  <div className='mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5 shadow-sm border border-border/50'>
    <Disclosure>
      {({ open }) => (
        <div>
          <DisclosureButton className='flex w-full justify-between items-center text-left text-xl lg:text-2xl font-medium focus:outline-hidden hover:cursor-pointer'>
            <span className='text-black'>{question}</span>
            <div className={`h-5 w-5 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
              <Icon icon='lucide:chevron-up' width='24' height='24' className="text-primary" />
            </div>
          </DisclosureButton>
          <DisclosurePanel className='text-base text-black/60 font-normal text-left pt-4 mt-6 border-t border-border'>
            <div className='lg:max-w-[85%] leading-relaxed'>
              {answer}
            </div>
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  </div>
);

const FAQ = () => {
  return (
    <section id='FAQ' className='relative py-12 bg-cover bg-center overflow-hidden dark:bg-darkmode'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='relative rounded-3xl py-20 bg-faq-bg bg-no-repeat bg-cover bg-primary'>
          <p className='text-lg font-semibold text-white/80 text-center mb-4 uppercase tracking-widest'>Support Center</p>
          <h2 className='text-white text-center text-4xl lg:text-5xl font-bold max-w-3xl mx-auto mb-16'>
            Frequently Asked Questions
          </h2>

          <div className='w-full px-4'>
            {/* --- General & Security --- */}
            <h3 className="text-white text-2xl font-bold max-w-5xl mx-auto mb-6 pl-4 border-l-4 border-white/30">Privacy & Security</h3>
            <FAQItem
              question="Where is my data stored?"
              answer="Your profile details, appointments, and camp data are maintained in Firebase. To ensure high performance, all profile photos are securely hosted on Cloudinary."
            />
            <FAQItem
              question="How does the QR Code system work?"
              answer="Every user gets a unique QR code. Doctors can share their card for instant patient booking, while patients can share their medical profile with doctors during emergencies."
            />

            {/* --- Patient Features --- */}
            <h3 className="text-white text-2xl font-bold max-w-5xl mx-auto mt-12 mb-6 pl-4 border-l-4 border-white/30">For Patients</h3>
            <FAQItem
              question="How do the health trackers work?"
              answer="The Water, Medicine, Diet, and Exercise trackers store data locally on your phone for maximum privacy. You can also track your mental well-being by logging your reading progress."
            />
            <FAQItem
              question="Can I book an appointment without scanning a QR?"
              answer="Yes! You can search for doctors directly, view their educational background and experience, and choose a specific clinic location to book a slot."
            />

            {/* --- Doctor Features --- */}
            <h3 className="text-white text-2xl font-bold max-w-5xl mx-auto mt-12 mb-6 pl-4 border-l-4 border-white/30">For Providers</h3>
            <FAQItem
              question="What is the 'Private Case' feature?"
              answer="Doctors can maintain a private study of their patient visitations and treatment plans. This data is stored in a dedicated Realtime Database accessible only to you."
            />
            <FAQItem
              question="How do Medical Camps work?"
              answer="Any verified doctor can create a camp. Other doctors can 'Request to Join,' and patients can register to attend. The camp owner manages all walk-in registrations and clinical notes."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
