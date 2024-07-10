import React from 'react'
import { FaBorderAll } from "react-icons/fa";
import { BiSolidShoppingBag } from 'react-icons/bi';
import { BiSolidBellRing } from 'react-icons/bi';

export default function nav() {

const shoppingBag = () => {
  alert("Your shoping bag is empty")
}

const deshBoard = () => {
let name = prompt("Hi! Please enter your name")
alert("Hi " + name + " Welcome to my online store")
}

  return (
    <div>
      <ul style={{display:"flex" , flexDirection: "row",alignItems:"flex-start", justifyContent:"space-evenly"}}>
        <li><FaBorderAll size={40} style={{boxShadow:"5px 5px green"}} onClick={deshBoard}/></li>
        <li><BiSolidShoppingBag size={40} style={{boxShadow:"2px 2px 2px gold"}} onClick={shoppingBag}/></li>
        <li><BiSolidBellRing size={40}/></li>
      </ul>
    </div>
  )
}
