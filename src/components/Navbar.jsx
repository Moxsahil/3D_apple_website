import React, { useState } from 'react'
import { appleImg, bagImg, searchImg } from '../utils/index.js'
import { navLists } from '../constants/index.js'

const Navbar = () => {

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {
    setIsSearchOpen((prev) => !prev); 
    console.log(isSearchOpen);
  }; 
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <a href='/' className="cursor-pointer">
        <img src={appleImg} alt="Apple" width={14} height={18}/>
        </a>

        <div className ='flex flex-1 justify-center '>
          {navLists.map((nav) => (
            <div key={nav} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img  src={ searchImg } alt="Search" width={18} height={18} onClick={handleSearchClick} className="cursor-pointer"/>
          <img  src={ bagImg } alt="bag" width={18} height={18}/>
          {isSearchOpen && (  
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange= {(e) => setSearchTerm(e.target.value)}
              className="absolute top-16 right-5 w-48 p-2 border border-gray-300 rounded-md shadow-lg focus:outline-none transition-transform" 
            />
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar