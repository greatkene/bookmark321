import React from 'react'
import { useState } from 'react'
import { MenuItems } from './NavbarItem'
import logo from '../logo.svg'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [showLinks, setShowLink] = useState(false)

    function handleClick() {
        setShowLink(!showLinks)
    }

  return (
    <header>
        <nav className='container flex py-4 items-center mt-4 sm:mt-12'>

            <div className="py-1">
                <img src={logo} alt='logo'></img>
            </div>
            <ul className={`sm:flex flex-1 gap-12 uppercase items-center justify-end text-Darkblue text-xm ${  showLinks ? " bg-black w-full" : "hidden" } `}>
            {
                MenuItems.map((link) => {
                    const {id, url, text} = link
                    return (
                            <li key={id} className='cursor-pointer'>  
                                <a  href={url}> {text} </a>
                            </li>
                    )
                })
            }
            <button type='button' className='uppercase bg-softRed text-white rounded-md px-7 py-3'>Login</button>
        </ul>


            
            <button className="flex sm:hidden flex-1 justify-end" onClick={handleClick}>
                {showLinks && (
                    <AiOutlineClose fontSize='2.2rem'/>
                )}
                {!showLinks && (
                    <BiMenu fontSize='2.2rem'/>
                )}
            </button>
        </nav>
    </header>
  )
}

export default Navbar; 