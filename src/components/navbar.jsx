import React from 'react'

const navbar = () => {
  return (

    
    <nav className='bg-purple-200 flex justify-between items-center px-4 h-[7vh]'> 

    <div className="logo font-bold text-black">PassMan</div>
        <ul>
            <li className='flex gap-3 '>
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="#">About</a>
                <a className='hover:font-bold' href="#">Contact</a>
                <a className='hover:font-bold' href="#">Complains</a>
            </li>
        </ul>
    </nav>
  )
}

export default navbar