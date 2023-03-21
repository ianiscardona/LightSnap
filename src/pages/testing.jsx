import React,{useState} from 'react'

export const Testing = () => {
    // const log = () => alert("TESTING");
    // const press = () => setTimeout(log,3000);
    // const click = () => console.log("Click");

    const [longpress, isLongPress] = useState(false);
    // const mousedown = () => console.log("Mouse Down");
    // const mouseup = () => console.log("Mouse Up");
    const touchstart = () => console.log("Touch Start");
    const touchend = () => console.log("Touch End");
  return (
    <div className='flex items-center justify-center'>
        <button onTouchStart={touchstart} onTouchEnd={touchend} className='px-5 py-4 bg-black text-white'>
            Button
        </button>
        <div>
            I AM A DIV
        </div>
    </div>
  )
}
