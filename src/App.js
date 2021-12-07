
import React,{useState} from "react";
import DigitalClock from './components/DigitalClock';
import Countdown from "./components/Countdown";
import Stopwatch from "./components/Stopwatch";
import './App.css';

function App() {
  const [clock,setClock]=useState(false)
  const [countdown,setCountDown]=useState(false)
  const [stopWatch,setStopWatch]=useState(false)

  return (
    <div >
      <nav className="App">
      <button onClick={()=>{setClock(true);setCountDown(false);setStopWatch(false)}}>Reloj</button>
      <button onClick={()=>{setClock(false);setCountDown(true);setStopWatch(false)}}>Cuenta atras</button>
      <button onClick={()=>{setClock(false);setCountDown(false);setStopWatch(true)}}>Cronometro</button>
      </nav>
      <div className="Content">
     {clock?<DigitalClock/>:''}
     {countdown?<Countdown/>:''}
     {stopWatch?<Stopwatch/>:''}
     </div>



      
    </div>
  );
}

export default App;
