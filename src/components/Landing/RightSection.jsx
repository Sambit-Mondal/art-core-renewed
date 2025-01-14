'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const RightSection = () => {

  useEffect(() => {
    const spanStyle = {
      position: 'absolute',
      left: '50%',
      transformOrigin: '0px 150px',
      transformStyle: 'flat',
      fontFamily: '"sans-serif"',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: '#fff',
    }

    const str = `Arundhati Bera · Artist · Art Core · `
    const text = document.getElementById('rotating-text-div')
    const angleStep = 360 / str.length

    for (let i = 0; i < str.length; i++) {
      let span = document.createElement('span')
      span.innerHTML = str[i]
      Object.assign(span.style, spanStyle)
      text.appendChild(span)
      span.style.transform = `rotate(${angleStep * i}deg)`
    }
  }, [])

  useEffect(() => {

  })

  return (
    <motion.div
      initial={{ translateX: 100, opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.35 }}
      className='w-1/2 pt-28 h-full flex items-center justify-center relative text-white overflow-hidden'
    >
      <div className='w-1/2 rounded-full p-3 flex items-center justify-center absolute mx-auto my-auto shadow-sm drop-shadow-artist overflow-hidden'>
        <p
          id='rotating-text-div'
          className='relative w-[300px] h-[300px] animate-rotate rounded-full tracking-tight'
        ></p>
        <Image
          src='/Arundhati-wo-bg.png'
          alt='Arundhati Bera'
          width={1500}
          height={1500}
          className='w-[18rem] absolute ml-5 -mb-10 z-10'
          priority
        />
        <div className='mx-auto my-auto flex items-center justify-center rounded-full bg-black absolute top-0 left-0 right-0 bottom-0 overflow-hidden -z-10'>
        </div>
      </div>
    </motion.div>
  )
}

export default RightSection