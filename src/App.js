
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Clock from './components/Clock';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light')
  const [text, setText]  = useState('Enable Dark Mode')
  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode ('dark');
    setText('Unable Dark Mode')
    document.body.style.backgroundColor = 'grey'

    }
    else {
      setMode ('light');
      setText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
        }
  }

  return (
    <div className="App">

   <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} text={text} />
  <div className='container my-3'>
    <TextForm heading="Enter Your Text Here" mode={mode}  />
    {/* <About/> */}
    </div>
    <Clock/>
    
    </div>
  );
}

export default App;
