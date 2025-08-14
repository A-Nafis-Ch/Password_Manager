import React from 'react'
import {useRef} from 'react'

const Manager = () => {

  const ref = useRef();

  const showPassword = () => {
    alert("Password is shown!");
    if(ref.current.src.includes("../public/icons/eyeoff.svg")){
      ref.current.src = "../public/icons/eyeon.svg";
    }else{
      ref.current.src = "../public/icons/eyeoff.svg";
    }
    
  }
  return (
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

      <div className='flex flex-col p-4 mt-16 mx-auto w-[90rem] items-center'>

        <div className="container text-center mb-10 text-black">

          <h1 className='font-bold '>Pass<span className='text-purple-500'>Man</span></h1>
          <p>This is your ultimate password manager website where you can store all your credientials.</p>
        </div>






        <input placeholder='Enter website URL' className='rounded-full border border-black w-full p-4 py-1 mb-5' type="text" name='' id='' />

        <div className="flex gap-5 w-full">
          <input placeholder='Enter username' className='rounded-full border border-black p-4 py-1 w-full ' type="text" />
          <div className="relative w-full">

            
            <input

            
              placeholder="Enter password"
              className="rounded-full border border-black p-4 py-1 w-full pr-10"
              type="password"

              

            />

            <img ref={ref} onClick={showPassword}  src="../public/icons/eyeon.svg" alt="" className='invert absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer'/>

            
          </div>




        </div>

        <button className='bg-purple-700 items-center justify-center p-3 py-2 rounded-full mt-10 w-fit flex border border-2 hover:bg-purple-600 text-white'>
          <lord-icon className=''
            src="https://cdn.lordicon.com/vjgknpfx.json"
            trigger="hover"
          >
          </lord-icon>Add Password</button>
      </div>

    </div>




  )
}

export default Manager