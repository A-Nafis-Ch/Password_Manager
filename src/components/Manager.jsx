import React, { useEffect } from 'react'
import { useRef, useState } from 'react'

const Manager = () => {

  const ref = useRef();

  const [form, setform] = useState({ site: "", username: "", password: "" });

  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {

    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords))
    }
  }, [])

  const showPassword = () => {
    alert("Password is shown!");
    if (ref.current.src.includes("../public/icons/eyeon.svg")) {
      ref.current.src = "../public/icons/eyeoff.svg";
    } else {
      ref.current.src = "../public/icons/eyeoff.svg";
    }

  }

  const savePassword = () => {



    setpasswordArray([...passwordArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    console.log(...passwordArray, form)

  }

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: [e.target.value] })
  }
  return (
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

      <div className='flex flex-col p-4 mt-16 mx-auto w-[90rem] items-center'>

        <div className="container text-center mb-10 text-black">

          <h1 className='font-bold '>Pass<span className='text-purple-500'>Man</span></h1>
          <p>This is your ultimate password manager website where you can store all your credientials.</p>
        </div>






        <input value={form.site} onChange={handlechange} placeholder='Enter website URL' className='rounded-full border border-black w-full p-4 py-1 mb-5' type="text" name='site' id='' />

        <div className="flex gap-5 w-full">
          <input value={form.username} onChange={handlechange} placeholder='Enter username' className='rounded-full border border-black p-4 py-1 w-full ' type="text" name='username' />
          <div className="relative w-full">


            <input


              value={form.password}
              onChange={handlechange}
              placeholder="Enter password"
              className="rounded-full border border-black p-4 py-1 w-full pr-10"
              type="password"
              name='password'



            />

            <img ref={ref} onClick={showPassword} src="../public/icons/eyeon.svg" alt="" className='invert absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer' />


          </div>




        </div>

        <button onClick={savePassword} className='bg-purple-700 items-center justify-center p-3 py-2 rounded-full mt-10 w-fit flex border border-2 hover:bg-purple-600 text-white'>
          <lord-icon className=''
            src="https://cdn.lordicon.com/vjgknpfx.json"
            trigger="hover"
          >
          </lord-icon>Add Password</button>


      </div>

      <h2 className='font-bold text-center text-2xl'>Your Passwords</h2>
      {passwordArray.length === 0 && <div>
        No Passwords to show</div>}

      {passwordArray.length !=0 && <div className="password-table w-[90rem] mx-auto mt-10">

        <table className="table-auto mx-auto w-full">
          <thead className='text-center bg-purple-500 '>
            <tr>
              <th>Website URL</th>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody className='bg-purple-100'>
            {passwordArray.map((item, index) => {

              return <tr className='text-center' key={index}>
              <td><a href={item.site} target='_blank'>{item.site}</a></td>
              <td>{item.username}</td>
              <td>{item.password}</td>
            </tr>
            })}
            
            
          </tbody>
        </table>
      </div>}  
0
      

    </div>




  )
}

export default Manager