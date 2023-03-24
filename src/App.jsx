import { useState } from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {

  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/about'  element={<Home/>}/>
      <Route path='/skills'  element={<Home/>}/>
      {/* <Route path='/experience'  element={<Home/>}/> */}
      <Route path='/project'  element={<Home/>}/>
      <Route path='/contact'  element={<Home/>}/>
      <Route path='*'  element={<Home/>}/>
    </Routes>
   </BrowserRouter>

   </>
  )
}

export default App
