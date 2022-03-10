import React from 'react'
import { useState } from 'react'
import SingleQuestion from './QuestionComp'
import { AiOutlineDown } from 'react-icons/ai'
import data from './questions'
 
const Faq = () => {
    const [questions, setQuestions] = useState(data)

  return (
    <section className='py-14 mt-10 lg:mt-25 w-full'>
        <div className='sm:w-3/4 lg:w-5/12 mx-auto px-2 justify-center'>
            <h1 className='text-3xl text-center text-darkBlue my-3'>Frequently Asked Questions</h1>
            <p className=' text-center text-grayBlue'>
                Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
            </p>
        </div>

        {/*FAQ Item*/}

       {
            questions.map((question) => {
                return <SingleQuestion key={question.id} {...question} />
            })
       }


    </section>
  )
}

export default Faq