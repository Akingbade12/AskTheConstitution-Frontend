import React from 'react'
import { Link } from 'react-router-dom'

const Thread = ({ initialUserInput, threadId }) => {
  return (
    <div className='absolute ml-[30px] mt-[20px] flex h-fit w-fit flex-col gap-[22px]'>
      <Link to='/prompt' className='h-[40px] w-[200px] overflow-hidden text-ellipsis whitespace-nowrap text-green'>
        {initialUserInput}
      </Link>
    </div>
  )
}

export default Thread
