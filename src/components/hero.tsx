import React from 'react'
import Image, { StaticImageData } from 'next/image'


interface HeroProps {
    title:string
    image:StaticImageData
    alt:string
}

export default function Hero({title,image,alt}:HeroProps) {
  return (
   <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image src={image} fill={true} alt={alt}/>
        <div className='absolute inset-0 bg-gradient-to-r from-gray-900'></div>
      </div>
      <div className='flex justify-center items-center h-screen'>
        <h1 className='text-white text-6xl font-bold'>{title}</h1>
      </div>
   </div>
  )
}
