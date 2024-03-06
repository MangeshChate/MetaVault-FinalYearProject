import React from 'react'
import { Link } from 'react-router-dom'

const Home_Hero = () => {
  return (

    <div className="relative h-[90vh] max-h-[90vh]">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="https://res.cloudinary.com/dl4jjxn61/video/upload/q_auto:best,f_auto:video/fetch/https://cdn.sandbox.game/home/home-banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full gap-5">


        <h1 className="text-white text-3xl font-bold flex flex-col items-center " >
          <span >THE</span>
          <span className="text-7xl font-bold logo-font text-white glow-text-blue">METAVAULT</span>

        </h1>
        <div className=' flex gap-3 flex-col justify-center items-center'>
          <p className="text-white font-bold text-xl">Store files  Mint NFTs and Experience the Metaverse.</p>
          <Link to="/connect" className='bg-blue-700 btn text-white p-3 font-bold text-xl rounded-full w-[75%] hover:border-2 hover:bg-blue-900 '> Enter the Metavault</Link>
        </div>
      </div>

    </div>

  )
}

export default Home_Hero
