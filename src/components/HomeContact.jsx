import React from "react";

export const HomeContact = () => {
  return(
    <div className='relative lg:pb-40 bg-[#232325]'>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 lg:mx-28 pt-20 lg:pt-40'>
        {/* Contact Info Section */}
        <div className='relative overflow-hidden font-["Inter"] text-[#FAF9F6] bg-[#1C0EB7] lg:rounded-[30px] order-last lg:order-first pb-11 pl-9 lg:pl-10'>
          <div className='flex mt-16 lg:mt-9 gap-2 mb-24 lg:mb-[70px]'>
            <img src="../icons/ls-lens-white.svg" alt="LightSnap Logo" className='h-20 w-20 lg:h-28 lg:w-28'/>
            <h1 className='font-["Galada"] self-center text-white text-3xl lg:text-4xl'>
              LightSnap
            </h1>
          </div>
          <h1 className='font-medium mb-3 text-3xl md:text-4xl lg:text-5xl'>
            Contact Information
          </h1>
          <h1 className='font-medium text-base lg:text-xl mb-16 lg:mb-12'>
              Like what you're seeing? Talk to us!
          </h1>
          <div className='flex gap-7 mb-14'>
            <img src="../icons/contact.png" alt="Contact Icon" className='h-5 w-5'/>
            <p className='font-normal text-sm sm:text-base'>
              +1012 3456 789
            </p>
          </div>
          <div className='flex gap-7 mb-12'>
            <img src="../icons/email.png" alt="Email Icon" className='h-4 w-5'/>
            <p className='font-normal text-sm sm:text-base'>
              demo@gmail.com
            </p>
          </div>
          <div className='flex gap-7 mb-14'>
            <img src="../icons/location.png" alt="Location Icon" className='h-6 w-5 self-center'/>
            <p className='font-normal text-sm sm:text-base'>
              132 Dartmouth Street Boston,<br />Massachusetts 02156 United States
            </p>
          </div>
          <div className='flex gap-8'>
            <a href="#">
              <img src="../icons/twitter.png" alt="Twitter Icon" className='h-14 w-14' />
            </a>
            <a href="#">
            <img src="../icons/instagram.png" alt="Instagram Icon" className='h-14 w-14' />
            </a>
          </div>
          <div className='absolute -bottom-10 -right-32 lg:-bottom-10 lg:-right-9'>
            <img src="../icons/ls-lens-gray.png" alt="LightSnap Logo" className='h-80 w-80' />
          </div>
        </div>

        {/* Form Section */}
        <div className='mb-24 lg:mb-0 order-first lg:order-last text-white mx-5 lg:mx-0 font-["Inter"]'>
          <h1 className='text-center text-3xl md:text-5xl lg:text-4xl font-bold mt-5 mb-16 lg:mb-20'>
            Interested?<br />Get in touch with us!
          </h1>
          <form>
            <label className='text-xs lg:text-base'>
              Your Name
            </label>
            <br />
            <input type="text" placeholder="Name" className='w-full mb-4 h-10 rounded-xl text-white bg-white/[0.34] text-xs placeholder:text-white placeholder:text-xs pl-3 lg:pl-6' required/>
            <br />
            <label className='text-xs lg:text-base'>
              Email
            </label>
            <br />
            <input type="email" placeholder="Email @domain.com" className='w-full mb-4 h-10 rounded-xl text-white bg-white/[0.34] text-xs placeholder:text-white placeholder:text-xs pl-3 lg:pl-6' required />
            <br />
            <label className='text-xs lg:text-base'>
              Your message for us:
            </label>
            <br />
            <textarea placeholder="Type your message here..." className='message w-full mb-8 lg:mb-16 h-28 rounded-xl text-white bg-white/[0.34] text-xs placeholder:text-white placeholder:text-xs pl-3 lg:pl-6 pt-1 lg:pt-3' required>
            </textarea>
            <div className='text-center'>
              <input type="submit" value="Send My Message" className='text-sm lg:text-lg bg-[#D7282F] px-4 lg:px-8 py-1 lg:py-3 rounded-[40px] hover:cursor-pointer text-white hover:bg-white hover:text-[#D7282F]' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

