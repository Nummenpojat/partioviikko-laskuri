import { useEffect, useState } from "react";
import React from 'react';


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
            }}>
            <h1>{props.paikka}</h1>
            <h1>{count} kävijää</h1>
            </button>
            
        </div>
    )
}

export default LisaaNappi