import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {

  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 })
    gsap.to('.link', { opacity: 1, y: 0, duration:1, stagger: 0.5 })
  }, []);

  const redirectToYouTube = () => {
    window.open('https://youtu.be/N1lhbJsaJxg', '_blank');
  };

  const redirectToYouTubeEvent = () => {
    window.open('https://www.youtube.com/live/ZiP1l7jlIIA?si=LVABz8Ku1REfuLNd', '_blank');
  };

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Get the highlights</h1>

          <div className="flex flex-wrap items-end gap-5">
          <p className="link cursor-pointer" onClick={redirectToYouTube}>
          Watch the film
          <img src={watchImg} alt="Watch" 
          className="ml-2"/>
          </p>
          <p className="link cursor-pointer" onClick={redirectToYouTubeEvent}>
          Watch the event
          <img src={rightImg} alt="right" 
          className="ml-2"/>
          </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights