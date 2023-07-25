import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './scenes/LandingPage'
import LogIn from './scenes/LogIn'
import SignUp from './scenes/SignUp'
import Prompt from './scenes/Prompt'
import Faq from './scenes/Faq'
import Subscription from './scenes/Subscription'

function App () {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/prompt' element={<Prompt />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/subscription' element={<Subscription />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
