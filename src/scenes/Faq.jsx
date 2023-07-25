import React from 'react'
import { Link } from 'react-router-dom'
import { UseMediaQuery } from '../hooks/UseMediaQuery'
import ToggleContent from '../components/ToggleContent'
import { TbLogout } from 'react-icons/tb'
import { CgProfile } from 'react-icons/cg'
import { FaRegComments } from 'react-icons/fa'
import { CiDark } from 'react-icons/ci'
import { FiSettings } from 'react-icons/fi'

const Faq = () => {
  const isaboveMediumScreens = UseMediaQuery('(min-width: 1060px)')
  return (
    <section
      id='faq'
      className='flex gap-x-2 px-10 py-20 md:h-screen md:items-center'
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
                  className='absolute right-24 top-2 h-[200px] w-[200px] rounded-full bg-pink/50 blur-3xl'
                />
                <div
                  className='absolute bottom-20 right-96 h-[200px] w-[200px] rounded-full bg-green/50 blur-3xl'
                />
                <div
                  className='absolute left-24 top-20 h-[200px] w-[200px] rounded-full bg-white/50 blur-3xl'
                />
                <div className='ml-[140px] mt-[20px] min-w-full items-center justify-center'>
                  <h1 className='ml-[290px] h-fit w-fit align-middle text-36 font-semibold leading-44 -tracking-2 text-black'>
                    Frequently Asked Questions
                  </h1>
                  <h5
                    className='ml-[260px] mt-3 h-fit w-fit align-middle text-20 font-normal leading-30 text-gray-500'
                  >
                    Everything you need to know about the product and billing.
                  </h5>
                </div>
                <div className='absolute right-[0px] top-[150px] flex h-[450px] w-[1180px]  flex-col items-center gap-[64px] overflow-scroll py-[20px]'>
                  <div
                    className='mr-[70px] flex h-fit w-[768px] grow-0 flex-col items-start gap-[30px]'
                  >
                    <ToggleContent
                      title='Is there a free trial available?'
                      content='Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
                    />
                    <div
                      className='ml-[-20px] mt-[-10px] h-[1px] w-[750px] items-stretch bg-gray-200'
                    />
                    <ToggleContent
                      title='Can I change my plan later?'
                      content='Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you’ll be charged the difference between your current plan and your new plan. If you downgrade, you’ll be credited on the next billing cycle.'
                    />
                    <div
                      className='ml-[-20px] mt-[-10px] h-[1px] w-[750px] items-stretch bg-gray-200'
                    />
                    <ToggleContent
                      title='What is your cancellation policy?'
                      content='You can cancel your subscription at any time. Once you cancel, you’ll be billed for the current billing cycle, but you won’t be billed again.'
                    />
                    <div
                      className='ml-[-20px] mt-[-10px] h-[1px] w-[750px] items-stretch bg-gray-200'
                    />
                    <ToggleContent
                      title='How does billing work?'
                      content='We offer monthly and annual billing. You can add or remove users at any time. If you add a user, you’ll be billed a pro-rated amount for the current billing cycle. If you remove a user, you’ll receive a credit for the next billing cycle.'
                    />
                    <div
                      className='ml-[-20px] mt-[-10px] h-[1px] w-[750px] items-stretch bg-gray-200'
                    />
                    <ToggleContent
                      title='How do I change my account email?'
                      content='You can change your account email by contacting us.'
                    />
                  </div>
                </div>
                <div className='absolute bottom-[10px] right-[55px] h-[180px] w-[1078px] rounded-2xl bg-gray-50'>
                  <div className='ml-[100px] h-[66px] w-[900px] flex-col items-center gap-[8px]'>
                    <h1 className='ml-[350px] mt-[25px] h-fit w-fit items-center font-Inter text-20 font-500 leading-30 text-gray-900'>
                      Still have questions?
                    </h1>
                    <h5 className='ml-[180px]  mt-[10px] items-center font-Inter text-18 font-400 leading-28 text-gray-500'>
                      Can’t find the answer you’re looking for? Please chat to our friendly team.
                    </h5>
                  </div>
                  <div className='ml-[480px] mt-[15px] box-border h-fit w-fit flex-row items-center gap-[8px] rounded-lg bg-green px-[18px] py-[10px] shadow-custom-2'>
                    <h1 className='font-Inter text-16 font-semibold leading-24 text-white'>
                      Chat with us
                    </h1>
                  </div>
                </div>
              </div>
              )
            : null
        }
        {/* SIDE MENU */}
        <div className='absolute left-[0px] top-[0px] h-screen w-[240px] overflow-y-auto bg-sidebar-grey mix-blend-normal shadow-custom'>
          <div className='absolute left-[25px] top-[20px]'>
            <img
              alt='image-1'
              className='absolute max-h-[78px] max-w-[190px]'
              src='/assets/atc-2.png'
            />
          </div>
          {/* line */}
          <div
            className='absolute left-[25px] top-[520px] w-[200px] items-center justify-center border border-line-grey'
          />
          {/* SIDE MENU LINKS */}
          <div className='absolute left-[30px] top-[540px] flex flex-col gap-[8px]'>
            <Link className='text-green'>
              <span className='font-Poppins text-18 font-400 leading-21'>
                <TbLogout className='mb-1 mr-1 inline-block items-center' />
                Logout
              </span>
            </Link>
            <Link to='/subscription' className='text-green'>
              <span className='font-Poppins text-18 font-400 leading-21'>
                <CgProfile className='mb-1 mr-1 inline-block items-center' />
                Upgrade to premium
              </span>
            </Link>
            <Link to='/FAQ' className='text-green'>
              <span className='font-Poppins text-18 font-400 leading-21'>
                <FaRegComments className='mb-1 mr-1 inline-block items-center' />
                FAQ
              </span>
            </Link>
            <Link className='text-green'>
              <span className='font-Poppins text-18 font-400 leading-21'>
                <CiDark className='mb-1 mr-1 inline-block items-center' />
                Switch to Dark Mode
              </span>
            </Link>
          </div>
          {/* SETTINGS BUTTON */}
          <div className='absolute bottom-[30px] left-[50px] flex flex-col'>
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
      </div>
    </section>
  )
}

export default Faq
