import React from 'react'
import { FaStar } from 'react-icons/fa6' 

function footer() {
  return (
    <div className='box'>
      <h1 className='online'>For Online <br/> <span id="order">Order</span></h1>
      <div className='left-side'>
        <li className='footer'>Color <span id="span1">1</span><span id="span2">1</span><span id="span3">1</span></li>
        <li className='footer'>Size <span id="span">XS</span><span id="span">S</span><span id="span">M</span><span id="span">L</span><br/>
        <span id="span">XL</span><span id="span">XXL</span><span id="span">XXX-l</span></li>
      </div>
      <div class="vertical-line"></div>
  <div class="right-side">
    <h2>Review</h2>
    <p><FaStar size={30} style={{color:"gold"}}/>
    <FaStar size={30} style={{color:"gold"}}/>
    <FaStar size={30} style={{color:"gold"}}/>
    <FaStar size={30} style={{color:"gold"}}/>
    <FaStar size={30}/>
    </p>
    <p style={{fontWeight:"bolder", fontSize:"180%"}}>$79-00</p>
    <button class="add-to-cart">Add to Cart</button>
  </div>
    </div>
  )
}

export default footer
