import React from 'react'
import heroImg from '../illustration-hero.svg'
const Hero = () => {
  return (
    <section className='relative'>
        <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        {/*Contents starts */}
            <div className="flex flex-1 flex-col items-center lg:items-start">
                <h2 className="text-darkBlue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                    A Simple Bookmark Manager
                </h2>
                <p className="text-grayBlue text-lg text-center lg:text-left mb-6">
                    A clean and simple interface to organize your favourite websites. Open a new browser
                    and see it load instantly. Try it for free.
                </p>
            <div className="flex justify-center flex-wrap gap-6">
                <button type='button' className='btn btn-purple hover:bg-white hover:text-softBlue hover:border-solid hover:border-2 hover:border-softBlue'>
                    Get it on Chrome
                </button>
                <button type='button' className='btn btn-white hover:bg-white hover:text-darkBlue hover:border-solid hover:border-2 hover:border-darkBlue'>
                    Get it on Firefox
                </button>
            </div>
        </div>

        {/*Image*/}

        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            {/*<img className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md-h-full' src={heroImg} alt='hero'/>*/}
            <img className='lg:w-full' src={heroImg} alt='hero'/>
        </div>

         {/*Image End*/}
        </div>

        {/*Rounded Image Background*/}
        <div className="overflow-hidden bg-softBlue rounded-l-full absolute h-48 -right-2 top-16 md:h-3/6 lg:h-80 w-4/5 lg:-bottom-28 lg:w-2/5 lg:overflow-hidden "></div>

    </section>
  )
}

export default Hero