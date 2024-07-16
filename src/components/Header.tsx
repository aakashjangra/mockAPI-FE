import React, { useState } from 'react'

const Header = ({currentPage, changePage}) => {
  
  return (
    <div>
      <nav 
      className='bg-orange flex justify-center p-4'
      >
        <ul className='flex gap-24 text-black font-semibold'>
          <li 
          className={`${currentPage === 'docs' ? 'text-white' : ''} cursor-pointer `}
          onClick={() => changePage('docs')}>read docs</li>
          <li 
          className={`${currentPage === 'test' ? 'text-white' : ''} cursor-pointer `}
          onClick={() => changePage('test')}>test api</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header