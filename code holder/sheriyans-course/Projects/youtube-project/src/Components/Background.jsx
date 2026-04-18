import React from 'react'

const Background = () => {
  return (
    <div className='fixed z-[2] w-full h-screen '>
          <div className = "absolute top-[5%] w-full text-zinc-600 text-xl py-10 flex justify-center">
        Documents
      </div>
      <h1 className='absolute text-zinc-700 text-[13vw] left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] leading-none font-semibold '>
        Docs
      </h1>
    </div>
  )
}

export default Background
