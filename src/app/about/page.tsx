import React from 'react'
import '@/app/styles/about.css'
import Image from 'next/image';

const About = () => {
  return (
    <>
        <div className="about">
            <h2>About Us</h2>
            <div className="about-container">
                <div className="about-content">
                    <p>
                        At <span>Watch World</span>, we are dedicated to crafting watches that blend timeless elegance with modern innovation. Our passion for precision and craftsmanship drives us to create pieces that are not only aesthetically stunning but also technically superior. Each watch in our collection is meticulously designed and manufactured using the finest materials to ensure durability and sophistication. We believe that a watch is more than just a timekeeper; it is a reflection of your unique style and a symbol of your journey. Whether you prefer classic designs or contemporary styles, our collection offers something for every taste and occasion. Explore our range and experience the art of timekeeping with <span>Watch World</span>.
                    </p>
                </div>

                <div className="about-image">
                    <Image src='/watch-images/ABOUT.jpeg' alt='About-Image' width={400} height={400} />
                </div>
            </div>
        </div>
    </>
  )
}

export default About;