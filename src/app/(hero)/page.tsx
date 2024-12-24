import React from 'react'
import Hero from '@/components/hero'
import homeSrc from '/public/Home.jpg'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title:"Home",
}

export default function Page() {
  const title = "Hello from Parent!"
  return (
      <Hero title={title} image={homeSrc} alt="home"/>
  )
}
