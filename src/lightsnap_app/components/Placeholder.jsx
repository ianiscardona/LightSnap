import React, { useState } from 'react'
import { GalleryModal } from './GalleryModal'

export const Placeholder = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className='w-full h-full'>
      <button onClick={() => setOpenModal(true)} className=' p-3 w-full h-full '></button>
      {/* <p className='text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, maxime asperiores commodi porro amet illum blanditiis aliquam temporibus pariatur, expedita, excepturi voluptas deleniti quod ducimus! Earum porro repudiandae odit tenetur.</p> */}
      <GalleryModal open={openModal} onClose={() => setOpenModal(!openModal)} />
    </div>
  )
}