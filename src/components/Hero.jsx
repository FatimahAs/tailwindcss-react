import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";



function Hero ()  {
  return (
	   <div className="flex flex-col md:flex-row gap-4 p-4 bg-white">
   
      <div className="flex-1 relative bg-gray-100 p-6 flex flex-col justify-center items-start">
        <h2 className="text-2xl font-semibold leading-tight text-gray-800 mb-2">
          WOODEN <br /> MINIMALISTIC <br /> CHAIRS
        </h2>
        <p className="text-sm text-gray-600 mb-1">SALE UP TO</p>
			  <p className="text-xl text-green-600 font-bold mb-4">40% Off</p>
			  	 
        <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded shadow hover:bg-yellow-500 transition">
          Shop Now
        </button>

       
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded shadow">
         <FaArrowLeft />

        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded shadow">
				 
				   <FaArrowRight />

        </button>

      
		
      </div>

   
      <div className=" bg-gray-50 p-6 flex flex-col items-center text-center">
        <h3 className="text-sm font-semibold text-gray-700 mb-1">Giordano</h3>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          PACK HEADPHONE FOR <br /> SUMMER
        </h2>
        <p className="text-md text-gray-700">
          Starting at <span className="text-red-500 font-bold">$99.99</span>
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQjGhi3DV7DFMNcSc4La4h8E9G1Y2a3zTwMqCdR_ir5L1-Whmg3NFRutsavU8zg3lcymFpVIqSLzuNeRnl9zGtSy1jq-72lx3tcV-PctBm0YSui8zV6zy1KU3SgMoGm2DOJSSYME3w&usqp=CAc"
          alt="HeadPhone"
          className="mt-2 rounded shadow object-fill"
        />
      </div>
    </div>
  )
}

export default Hero;



