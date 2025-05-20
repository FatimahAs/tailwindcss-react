import React from 'react'
import { FaBars } from "react-icons/fa6";

const NavBar = () => {
  return (
	  <div className='bg-[#fec406] p-2'>
		  <ul className='hidden  md:flex flex-row  justify-center  align-center gap-4 text-sm    '>
			  <li>All Categories</li>
			  <li>Today Deals</li>
			  <li>Electronics</li>
			  <li>Clothing</li>
			  <li>Computers</li>
			  <li>Furnitures</li>
			  <li>Mom & Baby</li>
			  <li>Books & More</li>
		  </ul>
		   <FaBars className='md:hidden text-2xl text-[#333] cursor-pointer' />
	</div>
  )
}

export default NavBar

