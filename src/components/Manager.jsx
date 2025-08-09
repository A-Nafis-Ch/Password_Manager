import React from 'react'

const Manager = () => {
  return (
    <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">

      <div className='flex flex-col p-4 mt-16 mx-auto w-[90rem] items-center'>

        <div className="container text-center   mb-10">

          <h1>PassMan</h1>
          <p>This is your ultimate password manager website where you can store all your credientials.</p>
        </div>






        <input className='rounded-full border border-pink-700 w-full p-4 py-1 mb-5' type="text" name='' id='' />

        <div className="flex gap-5 w-full">
          <input className='rounded-full border border-pink-700 p-4 py-1 w-full' type="text" />
          <input className='rounded-full border border-pink-700 p-4 py-1 w-full' type="text" />


        </div>

        <button className='bg-purple-500 items-center justify-center p-3 py-2 rounded-full mt-2 w-fit flex border hover:bg-purple-600'>
          <lord-icon
            src="https://cdn.lordicon.com/vjgknpfx.json"
            trigger="hover"
            >
          </lord-icon>Add Password</button>
      </div>

    </div>




  )
}

export default Manager