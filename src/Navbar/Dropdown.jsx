import React from 'react'
import { MenuItems } from './NavbarItem'

const Dropdown = () => {
  return (
    <div className='grid grid-rows-4 text-center items-center bg-black'>
        <ul className=' lg:hideen flex-1 gap-12 items-center justify-end text-darBlue uppercase text-xm'>
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
    </div>
  )
}

export default Dropdown