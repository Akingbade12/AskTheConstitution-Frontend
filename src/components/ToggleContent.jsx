import React, { useState } from 'react'
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi'

const ToggleContent = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <div className='mt-[-10px] flex h-fit w-fit flex-col items-stretch gap-[2px]'>
      <div className='flex items-center'>
        <h1 className='font-Inter text-18 font-500 leading-28 text-gray-900'>
          {title}
        </h1>
        <button
          className=' rounded-full p-2 text-green focus:outline-none'
          onClick={handleToggle}
        >
          {isExpanded ? <FiMinusCircle /> : <FiPlusCircle />}
        </button>
      </div>
      {isExpanded && <h5 className='font-Inter text-16 font-400 leading-24 text-gray-500'>{content}</h5>}
    </div>
  )
}

export default ToggleContent
