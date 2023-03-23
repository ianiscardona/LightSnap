import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {

  const [toggle, isToggle] = useState(false);
  const menu = () => isToggle(!toggle);

  return (
    <div className='fixed flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-24 lg:py-3 py-4 w-full bg-black/[0.85] lg:bg-black/75 z-50'>
      <Link to='/'>
        <p className='font-["Galada"] text-3xl text-white hidden lg:block'>
          LightSnap
        </p>
      </Link>
      <div className='hidden lg:flex'>
        <ul className='flex items-center text-center text-base font-bold font-["Inter"] text-[#FAF9F6] gap-x-12'>
            <Link to='/eventgallery'>
              <li>
                Event Gallery
              </li>
            </Link>
            <a href='#inquire'>
              <li>
                Inquire
              </li>
            </a>
        </ul>
      </div>
      {/* Centered Logo */}
      <div className='flex items-center justify-center lg:hidden'>
        <img src="../images/ls-lens-white.png" alt="LightSnap Logo" className='h-11 w-11'/>
      </div>
      {/* Mobile Menu */}
      <div className={`${toggle ? "flex flex-col pl-6 items-start lg:hidden":"hidden"} text-white`}>
        <ul>
          <Link to='/'>
            <li className='font-["Galada"] text-3xl text-white mb-2'>
              LightSnap
            </li>
          </Link>
          <Link to='/eventgallery'>
            <li className='text-base font-semibold font-["Inter"] text-[#FAF9F6] mb-2'>
              Event Gallery
            </li>
          </Link>
          <a href='#inquire'>
            <li className='text-base font-semibold font-["Inter"] text-[#FAF9F6]'>
              Inquire
            </li>
          </a>
        </ul>
      </div>
      {/* Mobile Menu Button */}
      <div className='absolute flex items-center justify-center top-4 right-4 lg:hidden'>
        <button onClick={menu}>
          <img src="../icons/mobile-menu.png" alt="Mobile Menu" className='' />    
        </button>    
      </div>
    </div>
  )
}
