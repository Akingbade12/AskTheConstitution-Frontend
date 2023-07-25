import React from 'react'
import { UseMediaQuery } from '../hooks/UseMediaQuery'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const LandingPage = () => {
  const isaboveMediumScreens = UseMediaQuery('(min-width: 1060px)')
  return (
    <section
      id='landing'
      className='gap-x-0.5 py-20 md:flex md:h-full md:items-center'
    >
      {/* PARAGRAPGH SECTION */}
      <div
        className='z-10 mb-10 flex basis-full justify-center md:order-1'
      >
        {
          isaboveMediumScreens
            ? (
              <div>
                <div className='absolute right-24 top-2 h-[300px] w-[300px] rounded-full bg-pink/25 blur-3xl' />
                <div className='absolute bottom-8 right-64 h-[300px] w-[300px] rounded-full bg-purple/25 blur-3xl' />
                <div className='mt-12'>
                  <p className='text-80 font-bold leading-86 -tracking-4 text-green '>
                    Empower {' '}
                  </p>
                  <p className='mt-1 text-80 font-bold leading-86 -tracking-4 text-green md:text-start'>
                    Yourself with {' '}
                  </p>
                  <p className='mt-1 text-80 font-bold leading-86 -tracking-4 text-green md:text-start'>
                    Legal Knowledge
                  </p>
                </div>
                <div className='max-w-md'>
                  <p className='mt-6 text-left text-21 font-normal leading-34 text-cool-grey md:text-start'>
                    Unlock the power of consitutional and legal knowledge in Nigeria. For clarity and empowerment ask specific questions and receive knowledgeable responses. Today,take control of your rights!
                  </p>
                </div>
                <motion.div
                  className='mt-6 flex justify-center md:justify-start'
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <Link to='/login' className='rounded-sm bg-green px-7 py-3 font-semibold text-white'>
                    <span className='flex items-center gap-2 font-Inter text-18 font-semibold leading-28'>
                      Get Started
                      <FaArrowRight className='' />
                    </span>
                  </Link>
                </motion.div>
              </div>
              )
            : (
              <div className='mt-64 items-center justify-center'>
                <div className='absolute right-24 top-2 h-[300px] w-[300px] rounded-full bg-pink/25 blur-3xl' />
                <div className='absolute bottom-8 right-64 h-[300px] w-[300px] rounded-full bg-purple/25 blur-3xl' />
                <div>
                  <p className='text-7xl font-semibold text-green '>
                    Empower {' '}
                  </p>
                  <p className='mr-32 mt-1 text-center text-7xl font-semibold text-green md:text-start'>
                    Yourself with {' '}
                  </p>
                  <p className='mt-1 text-center text-7xl font-semibold text-green md:text-start'>
                    Legal Knowledge
                  </p>
                </div>
                <div className='max-w-md'>
                  <p className='mt-6 text-left text-base text-cool-grey md:text-start'>
                    Unlock the power of consitutional and legal knowledge in Nigeria. For clarity and empowerment ask specific questions and receive knowledgeable responses. Today,take control of your rights!
                  </p>
                </div>
                <motion.div
                  className='mt-6 flex justify-center md:justify-start'
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <Link to='/login' className='rounded-sm bg-green px-7 py-3 font-semibold text-white'>
                    <span className='flex items-center gap-2'>
                      Get Started
                      <FaArrowRight className='' />
                    </span>
                  </Link>
                </motion.div>
              </div>
              )
        }
      </div>
      {/* IMAGE SECTION */}
      <div className='ml-60'>

        {isaboveMediumScreens
          ? (
            <div className='ml-[-32px]'>
              <div className='absolute -top-2 left-64 h-[300px] w-[300px] rounded-full bg-white/60 blur-3xl' />
              <div className='relative z-10 mix-blend-normal'>
                <img
                  alt='image-1'
                  className='absolute -mt-14 ml-24 max-w-[420px] object-cover object-right'
                  src='/assets/atc-2.png'
                />
                <img
                  alt='image-1'
                  className='max-h-[550px] max-w-[530px]'
                  src='/assets/Rectangle-1.png'
                />
              </div>
            </div>
            )
          : (
            <div className='-ml-32'>
              <div className='absolute -top-2 left-64 h-[300px] w-[300px] rounded-full bg-white/60 blur-3xl' />
              <img
                alt='image-1'
                className='absolute -top-1 ml-24 mt-32 max-w-[420px]'
                src='/assets/atc-2.png'
              />
            </div>
            )}
      </div>
    </section>
  )
}

export default LandingPage
