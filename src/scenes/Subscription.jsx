import React from 'react'
import { UseMediaQuery } from '../hooks/UseMediaQuery'
import { TbCurrencyNaira } from 'react-icons/tb'
import { BiCheckCircle } from 'react-icons/bi'
import { BsXCircle } from 'react-icons/bs'

const Subscription = () => {
  const isaboveMediumScreens = UseMediaQuery('(min-width: 1060px)')
  return (
    <section
      id='subscription'
    >
      {
        isaboveMediumScreens
          ? (
            <div>
              <div className='absolute left-[70px] top-[40px] h-[800px] w-[1286px] opacity-50'>
                <div
                  className='absolute right-[240px] top-[30px] h-[200px] w-[200px] rounded-full bg-pink/50 blur-3xl'
                />
                <div
                  className='absolute bottom-[30px] right-[350px] h-[200px] w-[200px] rounded-full bg-green/50 blur-3xl'
                />
                <div
                  className='absolute left-[100px] top-[30px] h-[200px] w-[200px] rounded-full bg-white/50 blur-xl'
                />
              </div>
              <img
                alt='image-1'
                className='absolute left-[20px] top-[20px] max-h-[78px] max-w-[190px]'
                src='/assets/atc-2.png'
              />
              <h1 className='absolute left-[534px] top-[60px] text-center font-DM-Sans text-40 font-bold leading-52 text-neutral-800'>
                Subscription plans
              </h1>
              <div className='absolute left-[150px] top-[150px] h-[585px] w-[1184px] flex-col items-start gap-[24px]'>
                <div className='ml-[-30px] mt-[30px] h-[500px] w-[378.67px] flex-col items-start gap-[40px] rounded-md bg-subscription-color px-[40px] py-[24px]'>
                  <div className='ml-[-15px] mt-[-10px] h-[237px] w-[330.67px] '>
                    <div className='mt-4 w-[330.67px] gap-[11px]'>
                      <h4 className='font-Manrope text-22 font-bold leading-30 text-neutral-800'>
                        Frebie
                      </h4>
                      <h5 className='mt-2 font-Manrope text-16 font-normal leading-21 text-neutral-500'>
                        Ideal for individuals who need quick access to basic features.
                      </h5>
                    </div>
                    <div className='ml-[-15px] mt-2 flex items-center'>
                      <TbCurrencyNaira className='text-6xl font-bold' />
                      <h1 className='mr-3 text-56 font-semibold leading-84 text-neutral-800'>
                        0
                      </h1>
                      <h5 className='text-16 font-light leading-21 text-neutral-600'>/ month</h5>
                    </div>
                    <div className='mt-5 flex h-[44px] w-[330.67px] items-center rounded-md border-[1.5px] border-green px-[6px] py-[12px]'>
                      <h5 className='ml-24 items-center font-Manrope text-16 font-semibold leading-21 text-green'>
                        Get Started Now
                      </h5>
                    </div>
                  </div>
                  <div className='order-1 ml-[-15px] mt-[20px] flex h-[208px] w-[330.67px] flex-col'>
                    <div className='w-[330.67px]'>
                      <div className='flex items-center'>
                        <BiCheckCircle className='text-base text-green' />
                        <h5 className='ml-2 font-Poppins text-16 font-medium leading-21'>2,000 queries per day</h5>
                      </div>
                    </div>
                    <div className='mt-4 w-[330.67px] gap-[17px]'>
                      <div className='flex items-center'>
                        <BiCheckCircle className='rounded-[200px] bg-slate-200 text-base text-green' />
                        <h5 className='ml-2 font-Poppins text-16 font-medium leading-21'>Access to 5 sample cases</h5>
                      </div>
                    </div>
                    <div className='mt-4 w-[330.67px] gap-[17px]'>
                      <div className='flex items-center'>
                        <BsXCircle className='rounded-[200px] bg-white text-base text-black' />
                        <h5 className='ml-2 font-Poppins text-16 font-medium leading-21 text-neutral-400'>Export response as document</h5>
                      </div>
                    </div>
                    <div className='mt-4 w-[330.67px] gap-[17px]'>
                      <div className='flex items-center'>
                        <BsXCircle className='rounded-[200px] bg-white text-base text-black' />
                        <h5 className='ml-2 font-Poppins text-16 font-medium leading-21 text-neutral-400'>Unlimited Sharing</h5>
                      </div>
                    </div>
                    <div className='mt-4 w-[330.67px] gap-[17px]'>
                      <div className='flex items-center'>
                        <BsXCircle className='rounded-[200px] bg-white text-base text-black' />
                        <h5 className='ml-2 font-Poppins text-16 font-medium leading-21 text-neutral-400'>
                          Unlimited threads
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='ml-[375px] mt-[-500px] h-[500px] w-[378.67px] flex-col items-start gap-[40px] rounded-xl bg-sub-green px-[40px] py-[24px] shadow-sub-shadow'>
                  <div className='ml-[-15px] mt-[-10px] h-[237px] w-[330.67px] '>
                    <div className='mt-4 w-[330.67px] gap-[11px]'>
                      <h4 className=' font-Manrope text-22 font-bold leading-30 text-white'>
                        Professional
                      </h4>
                      <h5 className='mt-2 font-Manrope text-16 font-normal leading-21 text-white'>
                        Ideal for individuals who who need advanced features and tools for client work.
                      </h5>
                    </div>
                    <div className='ml-[-15px] mt-2 flex items-center'>
                      <TbCurrencyNaira className='text-6xl font-bold text-white' />
                      <h1 className='mr-3 text-56 font-semibold leading-84 text-white'>
                        3,000
                      </h1>
                      <h5 className='text-16 font-light leading-21 text-white'>/ month</h5>
                    </div>
                    <div className='mt-5 flex h-[44px] w-[330.67px] items-center rounded-md border-[1.5px] bg-white px-[6px] py-[12px]'>
                      <h5 className='ml-24 items-center font-Manrope text-16 font-semibold leading-21 text-green'>
                        Get Started Now
                      </h5>
                    </div>
                  </div>
                  <div className='order-1 ml-[-15px] mt-[20px] flex h-[208px] w-[330.67px] flex-col'>
                    <div className='w-[330.67px]'>
                      <div className='flex items-center'>
                        <BiCheckCircle className='rounded-[200px] bg-slate-200 text-base text-green' />
                        <h5 className='ml-2 font-Poppins text-16 font-medium leading-21 text-white'>2,000 queries per day</h5>
                      </div>
                    </div>
                    <div className='mt-4 w-[330.67px] gap-[17px]'>
                      <div className='flex items-center'>
                        <BiCheckCircle className='rounded-[200px] bg-slate-200 text-base text-green' />
                        <h5 className='ml-2 font-Poppins text-16 font-medium leading-21 text-white'>Access to 5 sample cases</h5>
                      </div>
                    </div>
                    <div className='mt-4 w-[330.67px] gap-[17px]'>
                      <div className='flex items-center'>
                        <BsXCircle className='rounded-[200px] bg-white text-base text-black' />
                        <h5 className='ml-2 font-Poppins text-16 font-medium leading-21 text-white'>Export response as document</h5>
                      </div>
                    </div>
                    <div className='mt-4 w-[330.67px] gap-[17px]'>
                      <div className='flex items-center'>
                        <BsXCircle className='rounded-[200px] bg-white text-base text-black' />
                        <h5 className='ml-2 font-Poppins text-16 font-medium leading-21 text-white'>Unlimited Sharing</h5>
                      </div>
                    </div>
                    <div className='mt-4 w-[330.67px] gap-[17px]'>
                      <div className='flex items-center'>
                        <BsXCircle className='rounded-[200px] bg-white text-base text-black' />
                        <h5 className='ml-2 font-Poppins text-16 font-medium leading-21 text-white'>Unlimited threads</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='ml-[780px] mt-[-500px] h-[500px] w-[378.67px] flex-col items-start gap-[40px] rounded-md bg-subscription-color px-[40px] py-[24px]'>
                  <div className='ml-[-15px] mt-[-10px] h-[237px] w-[330.67px] '>
                    <div className='mt-4 w-[330.67px] gap-[11px]'>
                      <h4 className='font-Manrope text-22 font-bold leading-30'>
                        Enterprise
                      </h4>
                      <h5 className='mt-2 font-Manrope text-16 font-normal leading-21 text-neutral-400'>
                        Ideal for businesses who require regular  legal services.
                      </h5>
                    </div>
                    <div className='ml-[-15px] mt-2 flex items-center'>
                      <TbCurrencyNaira className='text-6xl font-bold' />
                      <h1 className='mr-3 text-56 font-semibold leading-84'>
                        7,000
                      </h1>
                      <h5 className='text-16 font-light leading-21'>/ month</h5>
                    </div>
                    <div className='mt-5 flex h-[44px] w-[330.67px] items-center rounded-md border-[1.5px] border-green px-[6px] py-[12px]'>
                      <h5 className='ml-24 items-center font-Manrope text-16 font-semibold leading-21 text-green'>
                        Get Started Now
                      </h5>
                    </div>
                  </div>
                  <div className='order-1 ml-[-15px] mt-[20px] flex h-[208px] w-[330.67px] flex-col'>
                    <div className='w-[330.67px]'>
                      <div className='flex items-center'>
                        <BiCheckCircle className='text-base text-green' />
                        <h5 className='ml-2 font-Poppins text-16 font-medium leading-21'>2,000 queries per day</h5>
                      </div>
                    </div>
                    <div className='mt-4 w-[330.67px] gap-[17px]'>
                      <div className='flex items-center'>
                        <BiCheckCircle className='rounded-[200px] bg-slate-200 text-base text-green' />
                        <h5 className='ml-2 font-Poppins text-16 font-medium leading-21'>Access to 5 sample cases</h5>
                      </div>
                    </div>
                    <div className='mt-4 w-[330.67px] gap-[17px]'>
                      <div className='flex items-center'>
                        <BsXCircle className='rounded-[200px] bg-white text-base text-black' />
                        <h5 className='ml-2 font-Poppins text-16 font-medium leading-21'>Export response as document</h5>
                      </div>
                    </div>
                    <div className='mt-4 w-[330.67px] gap-[17px]'>
                      <div className='flex items-center'>
                        <BsXCircle className='rounded-[200px] bg-white text-base text-black' />
                        <h5 className='ml-2 font-Poppins text-16 font-medium leading-21'>Unlimited Sharing</h5>
                      </div>
                    </div>
                    <div className='mt-4 w-[330.67px] gap-[17px]'>
                      <div className='flex items-center'>
                        <BsXCircle className='rounded-[200px] bg-white text-base text-black' />
                        <h5 className='ml-2 font-Poppins text-16 font-medium leading-21'>Unlimited threads</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          : null
      }
    </section>
  )
}

export default Subscription
