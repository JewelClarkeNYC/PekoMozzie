'use client'

import { useState, useEffect } from 'react'

import HungryMeter from "./HungryMeter";
import ResponsivePeko from "./ResponsivePeko";


export default function HungryCalc() {
    const [hungerData, setHungerData] = useState({})
    // const [loading, setLoading] = useState(true)
    useEffect(() => {
      const fetchHistory = async () => {
        try {
          const response = await fetch('/api/hunger-data');
          const data = await response.json();
        //   console.log('is this some hungry data ',data)
          setHungerData(data);
        } catch (error) {
          console.error('Error fetching job history', error);
        }
      }
    //   setTimeout(() => setLoading(false), 5000)
      fetchHistory()

    }, [])

    let pekoColor;

    function hungerLevel() {

        // console.log(hungerData)
        const dailyGoal = hungerData.weekly_quota/7
        // console.log(dailyGoal)
    
        if (dailyGoal === 0) {
          return 0;
        } 
        if (hungerData.jobApps){
        //   console.log(hungerData.jobApps.length)
          const percentHungry = 100 - (hungerData.jobApps.length/dailyGoal)*100;

          // Matching percentHungry to corresponding hangry color in meter and movement in Peko
          const meter = document.getElementById('hungryMeter')
        //   const responsivePeko = document.getElementById('responsivePeko')
          
          if (percentHungry <= 25){
            pekoColor = '/happyPeko.png';
            meter.classList.remove('red');
            meter.classList.remove('orange');
            meter.classList.remove('green');
            meter.classList.add('blue');
            // responsivePeko.classList.remove('redPeko');
            // responsivePeko.classList.remove('orangePeko');
            // responsivePeko.classList.remove('greenPeko');
            // responsivePeko.classList.add('bluePeko');
          } else if (percentHungry <= 50) {
            pekoColor = '/greenPeko.png';
            meter.classList.remove('red');
            meter.classList.remove('orange');
            meter.classList.add('green');
            meter.classList.remove('blue');
            // responsivePeko.classList.remove('redPeko');
            // responsivePeko.classList.remove('orangePeko');
            // responsivePeko.classList.add('greenPeko');
            // responsivePeko.classList.remove('bluePeko');
          } else if (percentHungry <= 75){
            pekoColor = '/orangePeko.png';
            meter.classList.remove('red');
            meter.classList.add('orange');
            meter.classList.remove('green');
            meter.classList.remove('blue');
            // responsivePeko.classList.remove('redPeko');
            // responsivePeko.classList.add('orangePeko');
            // responsivePeko.classList.remove('greenPeko');
            // responsivePeko.classList.remove('bluePeko');
          } else {
            pekoColor = '/redPeko.png';
            meter.classList.add('red');
            meter.classList.remove('orange');
            meter.classList.remove('green');
            meter.classList.remove('blue');
            // responsivePeko.classList.add('redPeko');
            // responsivePeko.classList.remove('orangePeko');
            // responsivePeko.classList.remove('greenPeko');
            // responsivePeko.classList.remove('bluePeko');
          }
    
          if (percentHungry <= 0){
            return 0;
          }
          return percentHungry;
        }
    }
    pekoColor = 'public/happyPeko.png'
    console.log(pekoColor)
    // if (loading){
    //     return <img src='/stillCooking.jpg'/>   
    // } else {
        return (
            <div>
                 <HungryMeter hungerLevel={hungerLevel()}/>
                 <ResponsivePeko pekoColorPath={pekoColor}/>     
            </div>
        )
    // }
}