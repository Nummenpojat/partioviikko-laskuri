import { useEffect, useState } from "react";
import React from 'react';


const LisaaNappi = (props:any) => {
    return (
        <div className="LisaaNappi">
            <h1>{props.name}</h1>
            <p>{props.count} kävijää</p>
            
        </div>
    )
}

export default LisaaNappi