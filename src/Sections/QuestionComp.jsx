import React from 'react'
import { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

const QuestionComp = ({title, info}) => {
    const [showAnswer, setShowAnswer] = useState(false)
  return (
    <div className="flex flex-col sm:w-3/4 border-b lg:w-5/12 mt-12 mx-auto">
        
        <div className="flex items-center py-4">
            <span className="flex-1 -mb-4"> {title} </span>
            <button onClick={() => setShowAnswer(!showAnswer)} className="flex cursor-pointer items-center px-5 py-4">
                {showAnswer ?<AiOutlineUp className='text-softRed text-2xl' /> : <AiOutlineDown className='text-softBlue text-2xl' />}           
            </button>
           
        </div>
        {showAnswer && <p> {info} </p>}
    </div>
    
  )
}

export default QuestionComp