import React from 'react'
import LisaaNappi from './LisaaNappi'
import TallennaKavija from './../services/TallennaKavija'
import { useEffect, useState } from "react";


const LisaaKavija = () => {
    const [ylaAulaCount, setYlaAulaCount] = useState(0);
    const [alaAulaCount, setAlaAulaCount] = useState(0);


    const [ylaAulaCountTimes, setYlaAulaCountTimes] = useState();
    const [alaAulaCountTimes, setAlaAulaCountTimes] = useState();

    

    return (
        <div className="LisaaKavija">
            <button onClick={() => {
                TallennaKavija("yla-aula", new Date())
                setYlaAulaCount(ylaAulaCount + 1)
            }} className="nappi-green"><LisaaNappi name="Ylä-aula" count={ylaAulaCount} paikka="ylä-aula"/></button>
            
            <button onClick={() => {
                TallennaKavija("ala-aula", new Date())
                setAlaAulaCount(alaAulaCount + 1)
            }} className="nappi-red"><LisaaNappi name="Ala-aula" count={alaAulaCount} paikka="ala-aula"/></button>
        </div>
    )
}

export default LisaaKavija