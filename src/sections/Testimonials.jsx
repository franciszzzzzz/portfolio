import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants/index'
import Glowcard from '../components/GlowCard'


const Testimonials = () => {
  return (
 <section id='testimonials' className='flex-center section-padding' >
    <div className='w-full h--full md:px-10 px-5 '>
        <TitleHeader title="What People Say About Me?"
        sub="⭐ Client Feedback Highlights"
        />
       <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
  {testimonials.map(({imgPath,name,mentions,review},index) => (
    <div key={index} >
      
      {/* Review Card */}
      <Glowcard card={{review}} >

      {/* User Info */}
      <div className="flex items-center gap-3">
        <img
          src={imgPath}
          alt={name}
          className="w-10 h-10 rounded-full"
        />

        <div>
          <p className="font-bold">{name}</p>
          <p className="text-white-50 text-sm">{mentions}</p>
        </div>
      </div>
      </Glowcard>
    </div>
  ))}
</div>
    </div>
 </section>
  )
}

export default Testimonials