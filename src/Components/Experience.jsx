import React from 'react'
import './Experience.css'

function Experience(props) {
  let status 
  if(props.openSpots === 0){
    status = 'SOLD OUT'
  }  else if(props.location === 'Online'){
    status = 'Online'
  }
  return (
    <>
     <div className="experience-container">
        <div className="experience">
            <img className='exp--img' src={`./src/assets/${props.coverImg}`} alt="" />
            {status && <div className="exp--status">{status}</div>}
            <div className="exp--stats">
                <img className='exp--star' src="src/assets/Star.png" alt="star" />
                <span className='exp--rating'>{props.stats.rating} </span>
                <span className='gray'>({props.stats.reviewCount}) . </span>
                <span className='gray'>{props.location}</span>
            </div>
            <p className='exp--title'>{props.title}</p> 
            <p className='exp--price'><span className='bold '>From ${props.price} /</span> person</p>
            
        </div>
        

     </div>
    </>
  )
}


export default Experience