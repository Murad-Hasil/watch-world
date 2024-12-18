import React from 'react'
import '@/app/styles/hero.css'

const Hero = () => {
  return (
    <>
        <div className="hero">
            <div className="hero-content">
                <h1>Timeless Elegance Awaits</h1>
                <p>
                    Explore our exclusive collection of luxury watches, each designed to blend precision with style. Elevate your timekeeping experience and make every moment count.
                </p>

                <a href="/watches"><button className='shopnow-button'>Shop Now</button></a>
            </div>
        </div>
    </>
  )
}

export default Hero;