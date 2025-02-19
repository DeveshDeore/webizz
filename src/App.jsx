import { useState } from 'react'

import './App.css'
import UserForm from './UserForm'
import UserInfo from './UesrInfo'
import Navbar from './Navbar'
import Footer from './assets/Footer'

function App() {
 

  return (
    <>
 <div className="overflow-x-hidden  text-white antialiased">
        <div className="fixed top-0 -z-10 h-full w-full">
          {/* <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
          <div className="relative h-full w-full bg-slate-950">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-[-10%] right-[-17%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-[-10%] right-[20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          </div>
        </div>
        <div className="container mx-auto px-8 lg:px-32">
          <Navbar/>
        <UserInfo/>
       <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
