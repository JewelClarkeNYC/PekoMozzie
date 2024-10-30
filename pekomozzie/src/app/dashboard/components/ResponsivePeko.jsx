'use client'

import { useState, useEffect } from 'react';

export default function ResponsivePeko (props){
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000), []
    })
    if(loading){
        return <img id='stillCooking' src='/stillCooking.jpg'/>   
    } else {
        let pekoClass;
        if (props.pekoColorPath==='/happyPeko.png'){
            pekoClass = 'bluePeko';
        } else if (props.pekoColorPath==='/greenPeko.png'){
            pekoClass = 'greenPeko';
        } else if (props.pekoColorPath==='/orangePeko.png'){
            pekoClass = 'orangePeko' ;
        } else {
            pekoClass = 'redPeko';
        }   
        return (
            <img id='responsivePeko' className={pekoClass} src={props.pekoColorPath} alt="Peko with corresponding color and animation to hungry level." />
        )            
    }
}