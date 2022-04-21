import { useState } from 'react';
import               './App.css';
import About from    './components/About';
import Alert from    './components/Alert';
import Clock from    './components/Clock';
import Navbar from   './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode]   = useState('light');
  const [text, setText]   = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }
  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode ('dark');
    setText('Unable Dark Mode')
    document.body.style.backgroundColor = 'grey'
    showAlert("Dark Mode has been Enabled", "success")

    }
    else {
      setMode ('light');
      setText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enabled", "success")
        }
  }

  

  return (
    <>
    <Router>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} text={text} />
      <Alert alert= {alert}/>
      <div className='container my-3'>
        <Routes>         
          <Route exact path="/" element={<TextForm heading="Enter Your Text Here" mode={mode} showAlert={showAlert} />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/clock" element={<Clock/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
//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 (new access token github)