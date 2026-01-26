'use client'
import React, { useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Featured = () => {
  // Track the flip state for each card index
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlippedCards(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const featuredData = [
    {
      heading: "Online Appointment Booking",
      imgSrc: "https://res.cloudinary.com/dioiyots5/image/upload/v1769363020/explore-removebg-preview_f7vi4c.png",
      description: "Easily find and book appointments with healthcare providers. Streamline your medical visits with real-time availability and instant confirmations."
    },
    {
      heading: "Godoc Card Feature With Qr code",
      imgSrc: "https://res.cloudinary.com/dioiyots5/image/upload/v1769363022/Qr_card-removebg-preview_y52iwk.png",
      description: "Access your medical records instantly via a secure QR code. Your Godoc card ensures your health history is always at your fingertips for faster care."
    },
    {
      heading: "Camp Feature",
      imgSrc: "https://res.cloudinary.com/dioiyots5/image/upload/v1769429179/camp_1_ebpe5b.png",
      description: "Discover and participate in local health camps. Stay informed about community wellness initiatives and specialized health screenings near you."
    },
    {
      heading: "Health Wellbeing",
      imgSrc: "https://res.cloudinary.com/dioiyots5/image/upload/v1769430071/tracker_2_xmqfvb.png",
      description: "A holistic tracker for water intake, medication reminders, and diet history. Includes a book reading tracker to support your mental wellbeing."
    },
    {
      heading: "Private Case For Professional",
      imgSrc: "https://res.cloudinary.com/dioiyots5/image/upload/v1769430438/cases_aqwqku.png",
      description: "Secure, end-to-end encrypted storage for professional medical cases. Collaborate with peers while maintaining the highest patient confidentiality."
    },
    {
      heading: "Scanning the Patient Info in emergency",
      imgSrc: "https://res.cloudinary.com/dioiyots5/image/upload/v1769423472/time_line_bg_a9uoia.svg",
      description: "In critical moments, scan patient profiles to view emergency data instantly. Access allergies, blood type, and emergency contacts in seconds."
    },
    {
      heading: "Contact US",
      imgSrc: "https://res.cloudinary.com/dioiyots5/image/upload/v1769363021/patient_support-removebg-preview_ol5wbq.png",
      description: "Our support team is here for you 24/7. Whether you have technical questions or need medical assistance, we're just a message away."
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: flippedCards.length === 0, // Pause carousel if a card is flipped for easier reading
    autoplaySpeed: 3000,
    speed: 800,
    cssEase: 'cubic-bezier(0.87, 0, 0.13, 1)',
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 800,
        settings: { slidesToShow: 1 }
      },
    ],
  };

  return (
    <section id="Feature" className="relative py-24 bg-white dark:bg-darkmode overflow-hidden">
      <div className='container mx-auto max-w-7xl px-4 relative'>
        <div className='text-center mb-16'>
          <h2 className='text-green-600 font-bold uppercase tracking-widest text-sm mb-3'>Advanced Features</h2>
          <h3 className='text-5xl font-extrabold text-black dark:text-white'>Featured works<span className='text-green-600'>.</span></h3>
        </div>

        <Slider {...settings} className="feature-slider">
          {featuredData.map((items, i) => (
            <div key={i} className="px-4 pb-12 perspective-1200">

              {/* Flip Card Wrapper */}
              <div className={`relative w-full h-[600px] transition-all duration-700 preserve-3d ${flippedCards.includes(i) ? 'rotate-y-180' : ''}`}>

                {/* FRONT SIDE */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-[3rem] border border-slate-100 shadow-sm flex flex-col overflow-hidden">
                  <div className="relative h-2/3 w-full bg-slate-50 flex items-center justify-center p-12">
                    <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={items.imgSrc}
                        alt={items.heading}
                        fill
                        className='object-contain'
                      />
                    </div>
                  </div>
                  <div className='p-10 flex flex-col justify-between flex-grow'>
                    <h4 className='font-bold text-3xl text-black leading-tight'>
                      {items.heading}
                    </h4>
                    <button
                      onClick={() => toggleFlip(i)}
                      className='mt-4 flex items-center text-green-600 font-bold hover:translate-x-2 transition-transform'
                    >
                      Learn more <span className='ml-2 text-xl'>→</span>
                    </button>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-green-600 rounded-[3rem] p-12 flex flex-col justify-center text-white shadow-2xl">
                  <h4 className='text-3xl font-bold mb-6 border-b border-green-400 pb-4'>{items.heading}</h4>
                  <p className='text-xl leading-relaxed font-medium opacity-95'>
                    {items.description}
                  </p>
                  <button
                    onClick={() => toggleFlip(i)}
                    className='mt-12 self-start bg-white text-green-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-50 transition-colors'
                  >
                    Go Back
                  </button>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* CSS for 3D Flip Effect */}
      <style jsx global>{`
        .perspective-1200 { perspective: 1200px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        
        .feature-slider .slick-dots li button:before { color: #10b981; font-size: 14px; opacity: 0.2; }
        .feature-slider .slick-dots li.slick-active button:before { color: #059669; opacity: 1; }
      `}</style>
    </section>
  )
}

export default Featured;