import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="w-full bg-red-500 h-23">
        <div className="container flex items-center justify-between">
        <div className="cursor-pointer"><Link to="/hero">Logo</Link></div>
        <ul className="flex gap-12">
            <li className='cursor-pointer text-xl md:text-lg sm:text-sm hover:bg-red-900 duration-200 p-2'><Link to="/hero">Hero</Link></li>
            <li className='cursor-pointer text-xl md:text-lg sm:text-sm hover:bg-red-900 duration-200 p-2'><Link to="/about">About</Link></li>
            <li className='cursor-pointer text-xl md:text-lg sm:text-sm hover:bg-red-900 duration-200 p-2'><Link to="/slider">Slider</Link></li>
            <li className='cursor-pointer text-xl md:text-lg sm:text-sm hover:bg-red-900 duration-200 p-2'><Link to="/contact">Contact</Link></li>
        </ul>
        
    </div>
    </div>
    
  )
}

export default Menu