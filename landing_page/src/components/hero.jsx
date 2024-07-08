import Hoodie from "../assets/hoodie.jfif"

import React from 'react'

function hero() {
  return (
    <>
    <div style={{display:"flex", flexDirection:"row"}}>
    <div>
        <h2 style={{fontSize:"200%",marginTop:"12%"}}>New Arravals</h2>
        <h1 style={{fontSize:"400%", fontWeight: "bolder",lineHeight:"2"
        }}>Just for</h1>
        <h3 style={{fontSize:"200%"}}>Just for ---</h3>
    </div>
    <div >
      <img src={Hoodie} alt="" style={{borderRadius:"50%",border:"solid 4px green", width:"50%", position:"absolute",left:"25%"}} />
    </div>
    
    <div class="side-cart" style={{display:"flex",flexDirection:"column", position:"absolute", right:"0",gap:"2"}}>
  <div class="box-left">
    <img src={Hoodie} alt="Kids Clothes"/>
  </div>
  <div class="box-right">
    <hr/>
    <h3>kids clothes</h3>
    <p>get all trends</p>
    <p>US $27-30</p>
    <button className="add-to-cart">Add to Cart</button>
  </div>
  <div class="side-cart" style={{display:"flex",flexDirection:"column", position:"absolute", right:"0",gap:"2"}}></div>
  <div class="box-left">
    <img src={Hoodie} alt="Kids Clothes"/>
  </div>
  <div class="box-right">
    <hr/>
    <h3>kids clothes</h3>
    <p>get all trends</p>
    <p>US $27-30</p>
    <button className="add-to-cart">Add to Cart</button>
  </div>
  <div class="side-cart" style={{display:"flex",flexDirection:"column", position:"absolute", right:"0",gap:"2"}}></div>
  <div class="box-left">
    <img src={Hoodie} alt="Kids Clothes"/>
  </div>
  <div class="box-right">
    <hr/>
    <h3>kids clothes</h3>
    <p>get all trends</p>
    <p>US $27-30</p>
    <button className="add-to-cart">Add to Cart</button>
  </div>
</div>
  
    </div>
    
    </>
  )
}

export default hero