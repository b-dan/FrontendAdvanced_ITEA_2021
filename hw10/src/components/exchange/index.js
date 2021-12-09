import React, { useEffect, useState } from "react";
import request from "../service";
import "./exchange.css";


function Exchange () {
    const [data , setData] = useState(null);

    useEffect(()=>{
        request( "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json").then((nbudata)=>{ 
        setData(nbudata)
        console.log(nbudata);
    })
        
    },[])

    return(
        <>
        {Array.isArray(data)? data.map((elem, index) => { return (
            <tr key={index}>
                <td>{elem.txt}</td>
                <td>{elem.rate.toFixed(2)}</td>
                <td>{elem.cc}</td>
            </tr>
        )}):null}    
        </>
    )
}

export default Exchange