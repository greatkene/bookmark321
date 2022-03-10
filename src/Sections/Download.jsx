import React from 'react'

const Download = () => {
  return (
    <section className='py-12'>
        <div className='sm:w-3/4 lg:w-5/12 mx-auto px-2 justify-center'>
            <h1 className='text-3xl text-center text-darkBlue my-3'>Download the extension</h1>
            <p className=' text-center text-grayBlue'>
            We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize
            </p>
        </div>
        {/*Cards*/}
        <div className="container w-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
        {/* Card 1 */}
            <div className="flex flex-col rounded-md shadow-md lg:mb-16">
                <div className="p-6 flex flex-col items-center">
                    <img src='./img/logo-chrome.svg' alt='chrome' />
                    <h3 className="mt-5 mb-2 text-darkBlue text-lg">Add to Chrome</h3>
                    <p className="mb-2 text-grayBlue font-light">Minimum version 62</p>
                    <div className='py-5'>
                        <img src='./img/bg-dots.svg' alt='dot' />
                    </div>
                    {/*Button*/}
                    
                        <button type='button' className='flex-1 shadow py-3 px-3 mx- rounded-md transition duration-300 btn-purple hover:bg-white hover:text-softBlue hover:border-solid hover:border-2 hover:border-softBlue'> Add & Install Extension  </button>
                    
                </div>
            </div>
            
            {/* Card 2 */}
            <div className="flex flex-col rounded-md shadow-md lg:my-8">
                <div className="p-6 flex flex-col items-center">
                    <img src='./img/logo-firefox.svg' alt='chrome' />
                    <h3 className="mt-5 mb-2 text-darkBlue text-lg">Add to Chrome</h3>
                    <p className="mb-2 text-grayBlue font-light">Minimum version 62</p>
                    <div className='py-5'>
                        <img src='./img/bg-dots.svg' alt='dot' />
                    </div>
                    {/*Button*/}
                  
                    <button type='button' className='flex-1 shadow py-3 px-3 mx- rounded-md transition duration-300 btn-purple hover:bg-white hover:text-softBlue hover:border-solid hover:border-2 hover:border-softBlue'> Add & Install Extension  </button>

                </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col rounded-md shadow-md lg:mt-16">
                <div className="p-6 flex flex-col items-center">
                    <img src='./img/logo-opera.svg' alt='chrome' />
                    <h3 className="mt-5 mb-2 text-darkBlue text-lg">Add to Chrome</h3>
                    <p className="mb-2 text-grayBlue font-light">Minimum version 62</p>
                    <div className='py-5'>
                        <img src='./img/bg-dots.svg' alt='dot' />
                    </div>
                    {/*Button*/}
                    
                    <button type='button' className='flex-1 shadow py-3 px-3 mx- rounded-md transition duration-300 btn-purple hover:bg-white hover:text-softBlue hover:border-solid hover:border-2 hover:border-softBlue'> Add & Install Extension  </button>

                
                </div>
            </div>
        {/*Card Ends Here*/}
        </div>

    </section>
  )
}

export default Download