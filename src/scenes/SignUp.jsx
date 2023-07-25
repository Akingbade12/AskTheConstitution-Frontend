import React from 'react'
import { UseMediaQuery } from '../hooks/UseMediaQuery'
// import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// import { FcGoogle } from 'react-icons/fc'
import { useForm } from 'react-hook-form'

const SignUp = () => {
  const isaboveMediumScreens = UseMediaQuery('(min-width: 1060px)')
  const { register, trigger, formState: { errors } } = useForm()
  const onSubmit = async (e) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }
  return (
    <section
      id='landing'
      className='gap-x-2 px-10 py-20 md:flex md:h-full md:items-center'
    >
      {/* RHS */}
      <div
        className='z-10 mr-32 mt-4 flex basis-full justify-center md:order-1'
      >
        {
       isaboveMediumScreens
         ? (
           <div className='ml-36'>
             <div className='absolute right-24 top-2 h-[200px] w-[200px] rounded-full bg-pink/25 blur-3xl' />
             <div className='absolute -bottom-10 right-[100px] h-[200px] w-[200px] rounded-full bg-purple/25 blur-3xl' />
             <div>
               <p className='text-5xl font-semibold text-green '>
                 Welcome back 👋
               </p>
               <div className='w-[350px]'>
                 <p className='mt-3 text-left text-base text-cool-grey md:text-start'>
                   Only with clarity, can we discover the indispensable blocks and components that pave the path of liberation
                 </p>
               </div>
             </div>
             {/* <div className='mr-4 mt-2 flex w-full flex-col items-center'>
               <Link to='https://www.google.com/' className='w-full rounded-md bg-dark-green px-24 py-4 font-semibold text-white'>
                 <span className='flex items-center gap-1'>
                   <FcGoogle className='' />
                   Sign up with Google
                 </span>
               </Link>
             </div> */}
             <div>
               {/* Username */}
               <p className='mt-5 text-left text-sm text-cool-grey md:text-start'>
                 Username
               </p>
               <input
                 className='mt-2 box-border flex h-[60px] w-full flex-row items-center gap-3 rounded-3xl border border-black bg-inherit px-5 py-4 text-cool-grey placeholder:text-blue-grey'
                 type='text'
                 placeholder='Username'
                 name='username'
               />
               {/* email */}
               <p className='mt-5 text-left text-sm text-cool-grey md:text-start'>
                 Email address
               </p>
               <input
                 className='mt-2 box-border flex h-[60px] w-full flex-row items-center gap-3 rounded-3xl border border-black bg-inherit px-5 py-4 text-cool-grey placeholder:text-blue-grey'
                 type='text'
                 placeholder='Email address'
                 name='email'
                 {...register('email', {
                   required: true,
                   pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                 })}
               />
               {errors.email && (
                 <p className='mt-1 text-red'>
                   {errors.email.type === 'required' && 'This field is required'}
                   {errors.email.type === 'pattern' && 'Invalid email address'}
                 </p>
               )}
               {/* password */}
               <p className='mt-5 text-left text-sm text-cool-grey md:text-start'>
                 Password
               </p>
               <input
                 className='mt-2 box-border flex h-[60px] w-full flex-row items-center gap-3 rounded-3xl border border-black bg-inherit px-5 py-4 text-cool-grey placeholder:text-blue-grey'
                 type='password'
                 placeholder='********'
                 name='password'
                 {...register('password', {
                   required: true,
                   minLength: 8
                 })}
               />
               {errors.password && (
                 <p className='mt-1 text-red'>
                   {errors.password.type === 'required' && 'This field is required'}
                   {errors.password.type === 'minLength' && 'Password must be at least 8 characters'}
                 </p>
               )}
               {/* confirm password */}
               <p className='mt-5 text-left text-sm text-cool-grey md:text-start'>
                 Confirm Password
               </p>
               <input
                 className='mt-2 box-border flex h-[60px] w-full flex-row items-center gap-3 rounded-3xl border border-black bg-inherit px-5 py-4 text-cool-grey placeholder:text-blue-grey'
                 type='password'
                 placeholder='********'
                 name='confirmPassword'
                 {...register('confirmPassword', {
                   required: true,
                   minLength: 8
                 })}
               />
               {errors.confirmPassword && (
                 <p className='mt-1 text-red'>
                   {errors.confirmPassword.type === 'required' && 'This field is required'}
                   {errors.confirmPassword.type === 'minLength' && 'Password must be at least 8 characters'}
                 </p>
               )}
               {/* signup button */}
               <div className='mt-3 flex flex-col'>
                 <button
                   className='mt-3 h-[50px] w-[130px] items-center justify-center rounded-lg bg-gradient-green font-semibold text-white'
                   onClick={onSubmit}
                 >
                   Login
                 </button>
               </div>
               {/* already have an account */}
               <div className='mt-3 flex flex-col'>
                 <p className='mt-3 text-left text-sm text-cool-grey md:text-start'>
                   Already have an account?
                   <Link to='/login' className='font-semibold text-green'>
                     {' '}
                     Log in
                   </Link>
                 </p>
               </div>
             </div>
           </div>
           )
         : (
           <div className='ml-36 mt-32'>
             <div className='absolute right-24 top-2 h-[200px] w-[200px] rounded-full bg-pink/25 blur-3xl' />
             <div className='absolute -bottom-10 right-[100px] h-[200px] w-[200px] rounded-full bg-purple/25 blur-3xl' />
             <div>
               <p className='text-5xl font-semibold text-green '>
                 Welcome back 👋
               </p>
               <div className='w-[350px]'>
                 <p className='mt-3 text-left text-base text-cool-grey md:text-start'>
                   Only with clarity, can we discover the indispensable blocks and components that pave the path of liberation
                 </p>
               </div>
             </div>
             <div>
               {/* Username */}
               <p className='mt-5 text-left text-sm text-cool-grey md:text-start'>
                 Username
               </p>
               <input
                 className='mt-2 box-border flex h-[60px] w-full flex-row items-center gap-3 rounded-3xl border border-black bg-inherit px-5 py-4 text-cool-grey placeholder:text-blue-grey'
                 type='text'
                 placeholder='Username'
                 name='username'
               />
               {/* email */}
               <p className='mt-5 text-left text-sm text-cool-grey md:text-start'>
                 Email address
               </p>
               <input
                 className='mt-2 box-border flex h-[60px] w-full flex-row items-center gap-3 rounded-3xl border border-black bg-inherit px-5 py-4 text-cool-grey placeholder:text-blue-grey'
                 type='text'
                 placeholder='Email address'
                 name='email'
                 {...register('email', {
                   required: true,
                   pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                 })}
               />
               {errors.email && (
                 <p className='mt-1 text-red'>
                   {errors.email.type === 'required' && 'This field is required'}
                   {errors.email.type === 'pattern' && 'Invalid email address'}
                 </p>
               )}
               {/* password */}
               <p className='mt-5 text-left text-sm text-cool-grey md:text-start'>
                 Password
               </p>
               <input
                 className='mt-2 box-border flex h-[60px] w-full flex-row items-center gap-3 rounded-3xl border border-black bg-inherit px-5 py-4 text-cool-grey placeholder:text-blue-grey'
                 type='password'
                 placeholder='********'
                 name='password'
                 {...register('password', {
                   required: true,
                   minLength: 8
                 })}
               />
               {errors.password && (
                 <p className='mt-1 text-red'>
                   {errors.password.type === 'required' && 'This field is required'}
                   {errors.password.type === 'minLength' && 'Password must be at least 8 characters'}
                 </p>
               )}
               {/* confirm password */}
               <p className='mt-5 text-left text-sm text-cool-grey md:text-start'>
                 Confirm Password
               </p>
               <input
                 className='mt-2 box-border flex h-[60px] w-full flex-row items-center gap-3 rounded-3xl border border-black bg-inherit px-5 py-4 text-cool-grey placeholder:text-blue-grey'
                 type='password'
                 placeholder='********'
                 name='confirmPassword'
                 {...register('confirmPassword', {
                   required: true,
                   minLength: 8
                 })}
               />
               {errors.confirmPassword && (
                 <p className='mt-1 text-red'>
                   {errors.confirmPassword.type === 'required' && 'This field is required'}
                   {errors.confirmPassword.type === 'minLength' && 'Password must be at least 8 characters'}
                 </p>
               )}
               {/* signup button */}
               <div className='mt-3 flex flex-col'>
                 <button
                   className='mt-3 h-[50px] w-[130px] items-center justify-center rounded-lg bg-gradient-green font-semibold text-white'
                   onClick={onSubmit}
                 >
                   Login
                 </button>
               </div>
               {/* already have an account */}
               <div className='mt-3 flex flex-col'>
                 <p className='mt-3 text-left text-sm text-cool-grey md:text-start'>
                   Already have an account?
                   <Link to='/login' className='font-semibold text-green'>
                     {' '}
                     Log in
                   </Link>
                 </p>
               </div>
             </div>
           </div>
           )
     }
      </div>
      {/* IMAGE SECTION */}
      <div className='ml-44'>

        {
         isaboveMediumScreens
           ? (
             <div>
               <div className='absolute -top-2 left-64 h-[300px] w-[300px] rounded-full bg-white/60 blur-3xl' />
               <a href='/'>
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
               </a>
             </div>
             )
           : (
             <div className='absolute -top-1 mt-12'>
               <img
                 alt='image-1'
                 className='z-10 w-full max-w-[400px] md:max-w-[600px]'
                 src='/assets/atc-2.png'
               />
             </div>
             )
         }
      </div>
    </section>
  )
}

export default SignUp
