import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function Navbar() {
    return (
        <div className='bg-white flex '>
            <div>
                <nav className='text-black font-serif text-2xl font-semibold px-32 py-10 '>E-Commerce</nav>
            </div>
            <div className='md:flex justify-end pl-32 hidden'>
                <ul className=' flex  items-center  px-32 space-x-3'>
                    <li>
                        <NavLink className='underline' to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='underline' to={'/Products'}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink className='underline' to={'/About'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink className='underline' to={'/Contact'}>Contact</NavLink>
                    </li>
                    <li className=''>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
