import React from 'react'
import { FaBorderAll } from "react-icons/fa";
import { BiSolidShoppingBag } from 'react-icons/bi';
import { BiSolidBellRing } from 'react-icons/bi';

export default function nav() {
  return (
    <div>
      <ul style={{display:"flex" , flexDirection: "row",alignItems:"flex-start", justifyContent:"space-evenly"}}>
        <li><FaBorderAll size={40} style={{boxShadow:"5px 5px green"}}/></li>
        <li><BiSolidShoppingBag size={40} style={{boxShadow:"2px 2px 2px gold"}}/></li>
        <li><BiSolidBellRing size={40}/></li>
      </ul>
    </div>
  )
}
