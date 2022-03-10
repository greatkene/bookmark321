import React from 'react'
import { features } from './featuresData'
import { useState } from 'react'

const Features = () => {
  
    const [value, setValue] = useState(0)
    const {id, title, header, desc, button, img} = features[value];
    
  return (
    <section className='py-20 mt-20 lg:mt-25 w-full'>
        {/*Header*/}
        <div className='sm:w-3/4 lg:w-5/12 mx-auto px-2 justify-center'>
            <h1 className='text-3xl text-center text-darkBlue my-3'>Features</h1>
            <p className=' text-center text-grayBlue'>Our aim is to make it quick and easy for you to access your
                favorite websites. Your bookmarks sync between your devices so
                you can access them on the go.
            </p>
        </div>

        {/* Tab Section */}
        
        <div className="relative">   
            <ul className="border-black container mt-10 flex flex-col lg:flex-row items-center justify-center">
            
                {
                    features.map((item, index) => {
                        return (
                            <li key={item.id} 
                                onClick={() => setValue(index)} 
                                className={` border-b-2 p-6 w-5/6 lg:w-52 text-center border-grayBlue cursor-pointer hover:text-softRed ${index === value && 'border-b-4 border-softRed'}`}>
                                {item.title}
                            </li>
                        )
                    })
                }
            </ul>
        </div>

        {/* Tab Contents */}
        <div className='relative mt-20 lg:mt-24'>
            <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24 mt-20 lg:mt-24">
            {/*Image*/}
                <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                    <img className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full' src={img} alt='features'/>
                </div>
            <div className="flex mt-14 flex-1 flex-col items-center lg:items-start">
                <h1 className='text-3xl text-darkBlue'> {header} </h1>
                <p className='text-grayBlue my-4 text-center lg:text-left sm:w-3/4 lg:w-full'> {desc} </p>
                <button type='button' className='btn btn-purple lg:block hidden'> {button} </button>
            </div>
     </div>
     {/*Rounded Image Background*/}
     <div className="overflow-hidden bg-softBlue rounded-r-full absolute h-48 md:-left-16 top-20 md:h-3/5 lg:top-32 lg:h-5/6 w-4/5 lg:-bottom-28 lg:w-2/5 lg:overflow-hidden"></div>

</div>
            
    </section>
  )
}

export default Features