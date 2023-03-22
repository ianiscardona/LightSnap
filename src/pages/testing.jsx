import React,{useState} from 'react'

export const Testing = () => {
  
    const [longpress1, isLongPress1] = useState(false);
    const [longpress2, isLongPress2] = useState(false);
    const [longpress3, isLongPress3] = useState(false);

    const touchstart1 = () => {
        console.log("Touch Start");
        isLongPress1(true);
    }
    const touchend1 = () => {
        console.log("Touch End");
        isLongPress1(false);
    }
    const touchstart2 = () => {
        console.log("Touch Start");
        isLongPress2(true);
    }
    const touchend2 = () => {
        console.log("Touch End");
        isLongPress2(false);
    }
    const touchstart3 = () => {
        console.log("Touch Start");
        isLongPress3(true);
    }
    const touchend3 = () => {
        console.log("Touch End");
        isLongPress3(false);
    }
   
  return (
    <>
    <div className='flex flex-col gap-y-10 items-center justify-center'>
        <button onTouchStart={touchstart1} onTouchEnd={touchend1} className={`px-5 py-4 bg-black text-white ${longpress1 ? "border-2 border-green-500":null}`}>
            Button 1
        </button>
        <button onTouchStart={touchstart2} onTouchEnd={touchend2} className={`px-5 py-4 bg-black text-white ${longpress2 ? "border-2 border-green-500":null}`}>
            Button 2
        </button>
        <button onTouchStart={touchstart3} onTouchEnd={touchend3} className={`px-5 py-4 bg-black text-white ${longpress3 ? "border-2 border-green-500":null}`}>
            Button 3
        </button>
    </div>
    <div className={`fixed top-0 flex items-center justify-center h-screen w-screen bg-slate-600 ${longpress1 ? "block":"hidden"} transition-all duration-300`}>
        I AM A DIV 1
    </div>
    <div className={`fixed top-0 flex items-center justify-center h-screen w-screen bg-slate-600 ${longpress2 ? "block":"hidden"} transition-all duration-300`}>
        I AM A DIV 2
    </div>
    <div className={`fixed top-0 flex items-center justify-center h-screen w-screen bg-slate-600 ${longpress3 ? "block":"hidden"} transition-all duration-300`}>
        I AM A DIV 3
    </div>
    </>
  )
}
