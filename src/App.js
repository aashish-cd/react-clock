import React, { useEffect, useState } from 'react'

const App = () => {
 const [hours, setHours] = useState('')
 const [minutes, setMinutes] = useState('')
 const [seconds, setSeconds] = useState('')
 const [meridian, setMeridain] = useState('AM !')

 if (hours > 12) {
  setMeridain("PM !")
  setHours(hours - 12)
 }

 const setClockTime = () => {
  var time = new Date();

  setHours(time.getHours())
  setMinutes(time.getMinutes())
  setSeconds(time.getSeconds())


 }
 useEffect(() => {
  setClockTime()
 }, [seconds])

 setTimeout(() => {
  var time = new Date()
  setSeconds(time.getSeconds());
 }, 1000)

 return <div className='container'>
  <div className='header'>
   <h1>current time</h1>

  </div>
  <div className='time'>

   <h1>{hours < 10 ? `0${hours}` : hours}:
    {minutes < 10 ? `0${minutes}` : minutes}:
    {seconds < 10 ? `0${seconds}` : seconds}{' '}
    {meridian}
   </h1>

  </div>
 </div>
}

export default App