import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <ProductDemo />
  )
}

const ProductDemo = () => {
  return (
    <section id="Tutorial" className="overflow-x-hidden">
      <div className="container mx-auto max-w-7xl px-4 relative">
        <h2 className="text-center max-w-5xl mx-auto">
          See How GoDOC Works in Real Life
        </h2>

        <h5 className="font-medium text-center pt-6 text-black/50 max-w-3xl mx-auto">
          Watch how patients, doctors, and medical camps use GoDOC to manage
          health records, appointments, and visits—without paperwork or delays.
        </h5>

        <div className="relative mt-16 w-full aspect-video rounded-3xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/4n9Y2SNvBX0"
            title="GoDOC Product Walkthrough"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default Team
