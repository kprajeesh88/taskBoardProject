import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'

function App() {


  return (
    <div className="App">

      <Header/>
      <Main/>
      <Footer/>
      
    </div>
  )
}

export default App
