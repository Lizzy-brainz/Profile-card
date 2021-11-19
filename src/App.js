import React from 'react'
import './App.css';
import Info from './Components/Info'
import About from './Components/About';
import Footer from './Components/Footer';

const App = () =>{
  return(
    <div className="info-wrapper">
<Info/>
<About/>
<Footer/>
    </div>
  )
}

export default App;