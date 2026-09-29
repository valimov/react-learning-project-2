import { useEffect, useRef, useState } from 'react'
import './Demo.css'

export default function Demo() {

    const initialTime = useRef<string>(((new Date()).toLocaleTimeString()))
     const [currentTime, setCurrentTime] = useState <string>((new Date().toLocaleTimeString()))

    useEffect(() => {
       const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

  return (
    <div className="demo">
        <p>Initial time: {initialTime.current}</p>
        <p>Current time: {currentTime}</p>
   
    </div>
  )
}