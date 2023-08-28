import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero--container">
        <img className='hero--img' src="src/assets/Group 77.png" alt="" />
        
        <h2 className='hero--header'>Online Experiences</h2>
        <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </section>
  )
}

export default Hero