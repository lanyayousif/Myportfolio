import { useEffect, useState } from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import { NavHashLink as link} from 'react-router-hash-link';

import './App.css'
import About from './components/about/About'
import Home from './pages/Home'

function App() {

  const [loader,setLoder]=useState(true)

  useEffect(() => {

    setTimeout(() => {
      setLoder(false);
    }, 2000);

  }, []);

  console.log(loader)

  if(loader === true){
    return (
      <div className="loder_part">
        <span class="loader">welcome to my portfolio</span>
      </div>
    )
  }
  else{

    return (
    <>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        {/* <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Home/>} />
        <Route path='/project' element={<Home/>} />
        <Route path='/contact' element={<Home/>}  /> */}
        <Route path='*'  element={<Home/>}/>
      </Routes>
      

    </>
    )
     }

}

export default App
