import React from 'react'

const Footer = () => {
  return (
	<div className="flex flex-col items-center justify-center  bg-gray-100">
       
          <div className="flex items-center justify-between w-3/4 bg-white shadow-lg p-6 mt-6 rounded-lg">
            <div>
              <h2 className="text-2xl font-bold">Bose Bluetooth Wireless Headphones</h2>
              <p className="text-gray-600">Crisp powerful sound from the best sounding wireless headphone in its class</p>
              <div className="mt-2">
                <span className="line-through text-gray-500">$260.50</span>
                <span className="text-green-600 font-bold ml-2">$219.05</span>
              </div>
              <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Shop Now</button>
            </div>
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTMi3Mawn9NsI6RqUv5pxvqdJ6rFaMc-mobfoezkpdjAhxW-jJf5R_0iCJXxEZpPnl7PvXxEnPFD1rdYaQSbQ431XidZiT8F-A0vegl0NAOP9xd5Uf4vORDLsYKIAyQkLry7hfAjoE&usqp=CAc" alt="Bose Headphones" className="w-1/3" />
          </div>
        </div>
  )
}

export default Footer