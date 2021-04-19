import { useEffect, useState } from "react";
import React from 'react';
import TallennaKavija from "../services/TallennaKavija";


const LisaaNappi = (props:any) => {
    const [count, setCount] = useState(0)


    useEffect(() => {
        let date:Date = new Date()
        let kavijaRequest = {
            aika: date,
            paikka: props.paikka
        }

        console.log(kavijaRequest)
    })



    return (
        <div className="LisaaNappi">
            <button onClick={() => {
                setCount(count + 1)
                TallennaKavija(props.paikka, new Date());
            }}>
            <h1>{props.paikka}</h1>
            </button>
            
        </div>
    )
}

export default LisaaNappi