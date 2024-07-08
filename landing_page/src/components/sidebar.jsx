import Female from "../assets/female.jpeg"
import Kids from "../assets/kids.jfif"
import Long from "../assets/longS.jfif"

import React from 'react'

function sidebar() {
  return (
   <>
    <div className="card" style={{display:"flex"}}>
      <img src={Female} alt="" style={{width:"220px", height:"180px"}}/>
      <p>Female Clothes</p>
      <button className="btn">Add to cart</button>
      </div>
      <div className="card" style={{display:"flex"}}>
        <img src={Kids} alt="" style={{width:"220px", height:"180px"}}/>
        <h3>Kids Clothes</h3>
        <button type="button" className="btn">Add to cart</button>
      </div>
      <div className="card" style={{display:"flex"}}>
        <img src={Long} alt="" style={{width:"220px", height:"180px"}} />
        <h3>Mens Clothes</h3>
        <button type="button" className="btn">Add to cart</button>
      </div>
   </>
  )
}

export default sidebar
