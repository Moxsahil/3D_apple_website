import React, { useState , useEffect } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo,smallHeroVideo} from '../utils/index.js';


const Hero = () => {
const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

const handleVideoSrcSet = () => {
  if(window.innerWidth < 760){
    setVideoSrc(smallHeroVideo);
  }else{
    setVideoSrc(heroVideo);
  }
}

useEffect(() => {
  window.addEventListener('resize', handleVideoSrcSet);

  return () => { 
    window.removeEventListener('resize', handleVideoSrcSet);
  }
}, []);

useGSAP(() => {
  gsap.to('#hero', { opacity:1, delay: 2})
  gsap.to('#cta', { opacity:1, y: -50, delay: 2})
},[])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className = "h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
        <div className = "md:w-10/12 w-9/12">
          <video className='pointer-events-none'autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4"/>
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="https://www.flipkart.com/apple-iphone-15-pro-natural-titanium-256-gb/p/itmc1a67b071a3ec?pid=MOBGTAGPGRZFCMMD&lid=LSTMOBGTAGPGRZFCMMDJFQU7Y&marketplace=FLIPKART&q=iphone+15+pro&store=tyy%2F4io&srno=s_1_2&otracker=search&otracker1=search&fm=organic&iid=10fd6ab0-0dd5-4309-bf98-f55cee62cf2b.MOBGTAGPGRZFCMMD.SEARCH&ppt=hp&ppn=homepage&ssid=s1z1dywtnk0000001731297382576&qH=c9de95b3b911a866" 
        className="btn" 
        target="_blank"
        rel="noopener noreferrer"

         >Buy Now</a>
         <p className="font-normal text-xl">Starts from <span className="price-text">₹4,008/month</span> or <span className="price-text">₹1,13,999</span>
        </p>

      </div>
    </section>   
  )
}

export default Hero