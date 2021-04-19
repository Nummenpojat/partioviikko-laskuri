import React from 'react'
import LisaaNappi from './LisaaNappi'
import { useEffect, useState } from "react";


const LisaaKavija = () => {
    const [ylaAulaCount, setYlaAulaCount] = useState(0);
    const [alaAulaCount, setAlaAulaCount] = useState(0);


    const [ylaAulaCountTimes, setYlaAulaCountTimes] = useState();
    const [alaAulaCountTimes, setAlaAulaCountTimes] = useState();

    return (
        <div className="LisaaKavija">
            <LisaaNappi paikka="Ylä-aula" count={ylaAulaCount}/>
            
            <LisaaNappi paikka="Ala-aula" count={alaAulaCount}/>
        </div>
    )
}

export default LisaaKavija