import React,{useState} from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {

  const [toggle,isToggle] = useState(false);
  const click = () => isToggle(!toggle);
  console.log(toggle)

  return (
    <div className='fixed flex items-center justify-center lg:justify-between lg:pl-24 lg:pr-16 w-full h-20 bg-black/[0.85] lg:bg-black/75 z-50'>
      <Link to='/'>
        <p className='font-["Galada"] text-3xl text-white hidden lg:block'>
          LightSnap
        </p>
      </Link>
      <div className='hidden lg:flex'>
        <ul className='flex items-center text-center text-base font-bold font-["Inter"] text-[#FAF9F6] gap-x-7'>
          <li>
            <button onClick={click}>
              {toggle ? "Home":"Event Gallery"}
            </button>
          </li>
          <a href='#inquire'>
            <li className='rounded-[40px] bg-[#1C0EB7] border-[3px] border-solid border-[#FAF9F6] px-6 py-3'>
              Inquire
            </li>
          </a>
        </ul>
      </div>
      {/* Centered Logo */}
      <div className='flex items-center justify-center lg:hidden'>
        <img src="../images/ls-lens-white.png" alt="LightSnap Logo" className='h-11 w-11'/>
      </div>
    </div>
  )
}
