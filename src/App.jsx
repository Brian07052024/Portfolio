import { useState } from 'react'
import Header from "../components/Header"
import Hero from '../components/Hero'
import Main from '../components/Main'

function App() {

  return (
    <div>

      <Header />

      <Hero />

      <Main />

      <footer className=' bg-black flex justify-center py-12'>
        <div className="max-w-7xl flex mx-3 w-full gap-5 items-center justify-between">
          <p className="text-white font-bold text-xl"><span className="bg-gradient-to-b from-titleTop to-titleBottom bg-clip-text text-transparent">FullStack</span> Developer</p>

          <p className="text-gray-400 text-base">Brian Ramirez Nuñez</p>

          <p className="text-gray-400 text-base">Email: briancorpusramirez2@hotmail.com</p>

          <p className="text-gray-400 text-base">Tel: (+52) 81 31 03 87 48</p>
          
        </div>
      </footer>

    </div>
  )
}

export default App
