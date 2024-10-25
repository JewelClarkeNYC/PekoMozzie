'use client'

// import { useState, useEffect } from 'react'



export default function HungryMeter(props) {
  // const [hungerData, setHungerData] = useState({})
  // useEffect(() => {
  //   const fetchHistory = async () => {
  //     try {
  //       const response = await fetch('/api/hunger-data');
  //       const data = await response.json();
  //       console.log('is this some hungry data ',data)
  //       setHungerData(data);
  //     } catch (error) {
  //       console.error('Error fetching job history', error);
  //     }
  //   }
  
  //   fetchHistory()
      // .then(() => {
      //   setHungerData(hungerData);
    // })
  // }, [])
  // useEffect(() => {
  //   console.log('hungry data changed')
  // }, [hungerData])

  // function hungerLevel() {
  //   // debugging 
  //   console.log(hungerData)
  //   const dailyGoal = hungerData.weekly_quota/7
  //   console.log(dailyGoal)
  //   // console.log(Math.min(((hungerData.jobApps? hungerData.jobApps.length : 0) / (hungerData.weekly_quota? hungerData.weekly_quota : 1))*100, 100))
  //   if (dailyGoal === 0) {
  //     return 0;
  //   } 
  //   if (hungerData.jobApps){
  //     console.log(hungerData.jobApps.length)
  //     const percentHungry = 100 - (hungerData.jobApps.length/dailyGoal)*100;
  //     // Matching percentHungry to corresponding hangry color in meter
  //     const meter = document.getElementById('hungryMeter')
  //     if (percentHungry <= 25){
  //       meter.classList.remove('red');
  //       meter.classList.remove('orange');
  //       meter.classList.remove('green');
  //       meter.classList.add('blue');
  //     } else if (percentHungry <= 50) {
  //       meter.classList.remove('red');
  //       meter.classList.remove('orange');
  //       meter.classList.add('green');
  //       meter.classList.remove('blue');
  //     } else if (percentHungry <= 75){
  //       meter.classList.remove('red');
  //       meter.classList.add('orange');
  //       meter.classList.remove('green');
  //       meter.classList.remove('blue');
  //     } else {
  //       meter.classList.add('red');
  //       meter.classList.remove('orange');
  //       meter.classList.remove('green');
  //       meter.classList.remove('blue');
  //     }

  //     if (percentHungry <= 0){
  //       return 0;
  //     }
  //     return percentHungry;
  //   }



    // existing code...
    // return Math.max(((hungerData.jobApps? hungerData.jobApps.length : 0 )/ (hungerData.weekly_quota? hungerData.weekly_quota : 1))*100, 100);
  // }
  // useEffect(() => {
  // }, [hungerData])
  return (
    <div id='hungryMeter' className='mx-auto w-3/5 rounded-lg bg-red-700 p-4 text-center text-white shadow-lg'>
      <h3 className='mb-1 text-xl'>PekoPeko Level {props.hungerLevel} </h3>
    </div>
  )
}