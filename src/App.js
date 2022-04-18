
import './App.css';
import Clock from './components/Clock';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App">

   <Navbar title = "TextUtils" />
  <div className='container my-3'>
    <TextForm heading="Enter Your Text Here"/>
    </div>
    <Clock/>
    
    </div>
  );
}

export default App;
