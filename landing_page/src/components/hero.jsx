
import Hoodierbg from "../assets/hoodie-rbg.png"

import React from 'react'

function hero() {

  const addToCart = () =>{
    alert("Added to your cart!")
  }


  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <h2 style={{ fontSize: "200%", marginTop: "12%" }}>New Arravals</h2>
          <h1 style={{
            fontSize: "400%", fontWeight: "bolder", lineHeight: "2"
          }}>Just for</h1>
          <h3 style={{ fontSize: "200%" }}>Just for ---</h3>
        </div>
        <div >
          <img src={Hoodierbg} alt="" className="image" style={{ borderRadius: "50%", border: "solid 4px white", width: "50%", height:"60%", position: "absolute", left: "23%", top:"20%" }} />
        </div>

        <div><h1 className="save">30% <br/>OFF</h1></div>

        <div class="side-cart" >
          <div class="box-left">
            <img src={Hoodierbg} alt="Kids Clothes" className="image sideimg" />
          </div>
          <div class="box-right">
            <hr />
            <h3>kids clothes</h3>
            <p>get all trends</p>
            <p>US $27-30</p>
            <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
          </div>
          <div class="side-cart" ></div>
          <div class="box-left">
            <img src={Hoodierbg} alt="Kids Clothes" className="image sideimg" />
          </div>
          <div class="box-right">
            <hr />
            <h3>kids clothes</h3>
            <p>get all trends</p>
            <p>US $27-30</p>
            <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
          </div>
          <div class="side-cart" ></div>
          <div class="box-left">
            <img src={Hoodierbg} alt="Kids Clothes" className="image sideimg" />
          </div>
          <div class="box-right">
            <hr />
            <h3>kids clothes</h3>
            <p>get all trends</p>
            <p>US $27-30</p>
            <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default hero