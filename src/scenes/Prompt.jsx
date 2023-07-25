import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { UseMediaQuery } from '../hooks/UseMediaQuery'
import { AiFillRightCircle } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { TbLogout } from 'react-icons/tb'
import { CgProfile, CgNotes } from 'react-icons/cg'
import { FaRegThumbsUp, FaRegThumbsDown, FaRegComments } from 'react-icons/fa'
import { CiDark } from 'react-icons/ci'
import Thread from '../components/Thread'

const Prompt = () => {
  const isaboveMediumScreens = UseMediaQuery('(min-width: 1060px)')
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const automatedReplies = [
    { input: 'hello', reply: 'Hi!' },
    { input: 'how are you?', reply: 'I am good, thank you!' }
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim() !== '') {
      const newMessage = { content: inputValue }
      setMessages((prevMessages) => [...prevMessages, newMessage])

      const automatedReply = automatedReplies.find(
        (reply) => reply.input.toLowerCase() === inputValue.trim().toLowerCase()
      )
      if (automatedReply) {
        const replyMessage = { content: automatedReply.reply }
        setMessages((prevMessages) => [...prevMessages, replyMessage])
      }
      setInputValue('')
    }
  }
  return (
    <section
      id='prompt'
      className='flex gap-x-2 overflow-y-scroll px-10 py-20 md:h-full md:items-center'
    >
      {/* RHS */}
      <div
        className='mt-4 basis-full justify-center overflow-scroll md:order-1'
      >
        {
          isaboveMediumScreens
            ? (
              <div className='ml-36 flex h-screen flex-col overflow-scroll'>
                <div
                  className='absolute right-24 top-2 h-[200px] w-[200px] rounded-full bg-pink/25 blur-3xl'
                />
                <div
                  className='absolute right-24 top-2 h-[200px] w-[200px] rounded-full bg-pink/25 blur-3xl'
                />
                <div className='mt-[0px] p-8'>
                  {messages.map((message, index) => (
                    <div key={index} className='mb-1'>
                      <div className={`ml-[120px] mt-8 h-fit w-[920px] flex-row items-start overflow-scroll rounded-lg px-[30px] py-[15px] shadow-[-3px_4px_11px_6px_rgba(0,0,0,0.04)]
                      ${index === messages.length - 1 ? 'bg-textbox2-grey' : 'bg-textbox1-grey'}
                    `}>
                        {message.content}
                      </div>
                      {index === messages.length - 1 &&
                        <div className='ml-[100px] text-gray-500'>
                          <FaRegThumbsUp className='ml-7 mt-2 inline-block text-green' />
                          <FaRegThumbsDown className='ml-3 mt-2 inline-block text-green' />
                          <CgNotes className='ml-3 mt-2 inline-block text-green' />
                        </div>}
                    </div>
                  ))}
                </div>
                <img
                  alt='profile-picture'
                  className='absolute left-[1280px] top-[10px] mt-[10px] h-[40px] w-[40px] object-cover'
                  src='/assets/profile-picture.png'
                />
                <div className='mt-[-40px] flex-1'>
                  <img
                    alt='profile-picture'
                    className='absolute left-[1280px] top-[90px] h-[30px] w-[30px] object-cover'
                    src='/assets/profile-picture.png'
                  />
                </div>
                <div className='fixed inset-x-0 bottom-0 left-[200px] pb-6'>
                  <div
                    className='ml-[150px] mt-[-70px] h-[60px] w-[1050px] flex-row items-start gap-[10px] overflow-scroll rounded-lg bg-textbox1-grey shadow-[-3px_4px_11px_6px_rgba(0,0,0,0.04)]'
                  >
                    <form className='px-[30px] py-[10px]' onSubmit={handleSubmit}>
                      <input
                        className='h-full w-full flex-1 border-none bg-transparent focus:outline-none focus:ring-0'
                        placeholder='type a question here'
                        type='text'
                        name='messageInput'
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                      />
                      <button
                        className='border-none bg-transparent focus:outline-none focus:ring-0'
                        type='submit'
                      >
                        <AiFillRightCircle className='ml-[940px] mt-[-45px] items-center justify-center text-3xl text-green' />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              )
            : (
              <div className='ml-36 flex h-screen flex-col overflow-scroll'>
                <div
                  className='absolute right-24 top-2 h-[200px] w-[200px] rounded-full bg-pink/25 blur-3xl'
                />
                <div
                  className='absolute right-24 top-2 h-[200px] w-[200px] rounded-full bg-pink/25 blur-3xl'
                />
              </div>
              )
        }
        {/* SIDE MENU */}
        <div>

          {
            isaboveMediumScreens
              ? (
                <div
                  className='absolute left-[0px] top-[0px] h-screen w-[240px] overflow-y-auto bg-sidebar-grey mix-blend-normal shadow-custom'
                >
                  <div className='absolute left-[25px] top-[20px]'>
                    <img
                      alt='image-1'
                      className='absolute max-h-[78px] max-w-[190px]'
                      src='/assets/atc-2.png'
                    />
                  </div>
                  {/* new thread button */}
                  <div className='ml-6 mt-[110px] flex-1'>
                    <button
                      className='mt-3 h-[50px] w-[130px] items-center justify-center rounded-lg bg-gradient-green font-semibold text-white'
                      // onClick={onSubmit}
                    >
                      + New Thread
                    </button>
                  </div>
                  {/* threads */}
                  <Thread initialUserInput={messages.length > 0 ? messages[0].content : ''} threadId={1} />
                  {/* line */}
                  <div
                    className='absolute left-[25px] top-[520px] w-[200px] items-center justify-center border border-line-grey'
                  />
                  {/* SIDE MENU LINKS */}
                  <div className='absolute left-[45px] top-[540px] flex flex-col gap-[8px]'>
                    <Link className='text-green'>
                      <span>
                        <TbLogout className='mb-1 mr-1 inline-block items-center' />
                        Logout
                      </span>
                    </Link>
                    <Link to='/subscription' className='text-green'>
                      <span>
                        <CgProfile className='mb-1 mr-1 inline-block items-center' />
                        Upgrade to premium
                      </span>
                    </Link>
                    <Link to='/FAQ' className='text-green'>
                      <span>
                        <FaRegComments className='mb-1 mr-1 inline-block items-center' />
                        FAQ
                      </span>
                    </Link>
                    <Link className='text-green'>
                      <span>
                        <CiDark className='mb-1 mr-1 inline-block items-center' />
                        Dark Mode
                      </span>
                    </Link>
                  </div>
                  {/* SETTINGS BUTTON */}
                  <div className='ml-8 mt-[530px] flex flex-col'>
                    <button
                      className='h-[50px] w-[130px] rounded-lg bg-gradient-green px-4 text-white'
                      // onClick={onSubmit}
                    >
                      <span>
                        <FiSettings className='mb-1 mr-2 inline-block items-center' />
                        Settings
                      </span>
                    </button>
                  </div>
                </div>
                )
              : null
          }
        </div>
      </div>
    </section>
  )
}

export default Prompt
