import React from 'react'
import Image from 'next/image'
import RandomImage from '../components/random-images'

const NextJsSkills = () => {
  return (
    <>
      <Image
        src="/images/iceland-1280.jpg"
        alt="Iceland"
        width={1024}
        height={500}
        layout="responsive"
      />
      <RandomImage />
    </>
  )
}

export default NextJsSkills
