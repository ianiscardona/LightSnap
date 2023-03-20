import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export const NavbarEvent= () => {

  const [toggle, isToggle] = useState(false);
  const menu = () => isToggle(!toggle);
  console.log(toggle);

  return (
    <div className='fixed flex flex-col lg:flex-row lg:items-center lg:justify-between lg:pl-24 lg:pr-16 lg:py-3 py-4 w-full bg-black lg:bg-black/75 z-50'>
      <Link to='/'>
        <p className='font-["Galada"] text-3xl text-white hidden lg:block'>
          LightSnap
        </p>
      </Link>
      <div className='hidden lg:flex'>
        <ul className='flex items-center text-center text-base font-bold font-["Inter"] text-[#FAF9F6] gap-x-7'>
            <Link to='/'>
              <li>
                Home
              </li>
            </Link>
            <Link to='/'>
              <li className='rounded-[40px] bg-[#1C0EB7] border-2 border-solid border-[#FAF9F6] px-6 py-3'>
                Inquire
              </li>
            </Link>
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
          <Link to='/'>
            <li className='text-base font-semibold font-["Inter"] text-[#FAF9F6] mb-2'>
              Home
            </li>
          </Link>
          <Link to='/'>
            <li className='text-base font-semibold font-["Inter"] text-[#FAF9F6]'>
              Inquire
            </li>
          </Link>
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
