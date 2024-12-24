import React from 'react'
import Hero from '@/components/hero'
import performanceSrc from '/public/Performance.jpg'    

import { Metadata } from 'next'

export const metadata:Metadata = {
  title:"Performance",
}

export default function Page() {
  return (
   <Hero title="Performance" image={performanceSrc} alt="performance"/>
  )
}
