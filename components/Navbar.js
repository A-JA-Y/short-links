import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="h-16 bg-green-700 flex justify-around px-3 items-center text-white">
        <div className='text-2xl font-bold'>Short Links</div>
      <ul className='flex justify-center items-center gap-5'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
        <li>
        <Link href="/shorten"><button className="bg-green-600 px-10 py-2 mx-2 rounded-lg hover:bg-green-400 shadow-green-900 drop-shadow-xl shadow-md shadow-inner font-bold " >Try Now!</button  ></Link>
        <Link href="https://github.com/A-JA-Y" target='_blank'><button className="bg-green-600 px-10 py-2 mx-2 rounded-lg hover:bg-green-400 shadow-green-900 drop-shadow-xl shadow-md shadow-inner font-bold " >Github</button></Link>

        </li>
        
      </ul>
    </nav>
  )
}

export default Navbar
