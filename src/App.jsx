import { useState } from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import './App.css'
import About from './components/about/About'
import Home from './pages/Home'

function App() {

  return (
   <>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/skills'  />
      {/* <Route path='/experience'  element={<Home/>}/> */}
      <Route path='/project'  />
      <Route path='/contact'  />
      <Route path='*'  element={<Home/>}/>
    </Routes>

   </>
  )
}

export default App
