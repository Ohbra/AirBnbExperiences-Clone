import React from 'react'
import './Home.css'
import Experience from './Experience'
import data from './data'

function Home() {
  const experiences = data.map(exp =>    
    <Experience 
        key={exp.id}
        {...exp}
    />   )
  return (
    <>
    
    <div className="home-container"></div>

    <section className='exp--list'>
        {experiences}
    </section>

    </>
  )
}

export default Home