import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between pl-24 pr-16 w-full h-20 bg-black/75'>
      <Link to='/'>
        <p className='font-["Galada"] text-3xl text-white hidden md:block'>
          LightSnap
        </p>
      </Link>
      <div className='hidden md:flex'>
        <ul className='flex items-center text-center text-base font-bold font-["Inter"] text-[#FAF9F6] gap-x-7'>
          <li>
            Event Gallery
          </li>
          <a href='#inquire'>
            <li className='rounded-[40px] bg-[#1C0EB7] border-[3px] border-solid border-[#FAF9F6] px-6 py-3'>
              Inquire
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}
