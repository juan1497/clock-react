import React,{useState,useEffect} from 'react'

const DigitalClock = () => {
    const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 100);
  }, []);
    return (
        <div className="digital-clock">
            <h2>{clockState}</h2>
        </div>
    )
}

export default DigitalClock
