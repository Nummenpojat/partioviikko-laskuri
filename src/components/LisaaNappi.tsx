import { useEffect, useState } from "react";
import React from 'react';


const LisaaNappi = (props:any) => {
    return (
        <div className="LisaaNappi">
            <div>
            <h1>{props.name}</h1>
            <p>{props.count} kävijää</p>
            </div>
            
        </div>
    )
}

export default LisaaNappi