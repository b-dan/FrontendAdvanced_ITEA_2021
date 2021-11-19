import React from "react";
import "../card/card.css"

function Card({ data }) {
    return (<>
        <div id='container'>
        <h1> Our Data </h1>
        <hr/>
        {Array.isArray(data)&&data.length>0?
            data.map(function (element, index) {
                return (
                    <div className='card' key={index}>
                        <div className='front'>
                            <img src='https://s-media-cache-ak0.pinimg.com/736x/ba/45/26/ba4526d03ed12a940bec564cfd9de58f.jpg' className='contact' alt="Where is the img?"/>
                            <span className='name'>{element.name}</span>
                            <hr/>
                            <span className='name'>{element.username}</span>
                            <hr/>
                            <span className ='email'>{element.email}</span>
                            <hr/>
                            <span className='website'>{element.website}</span>
                        </div>
                        <div className='back'>
                            <span className="address">Address:</span>
                            <p><span className="address">City: </span>{element.address.city}</p>
                            <p><span className="address">Street: </span>{element.address.street}</p>
                            <p><span className="address">Zip: </span>{element.address.zipcode}</p>
                            <span className="address">Company:</span>
                            <p>{element.company.name}</p>
                            <p className="catchPhrase">"{element.company.catchPhrase}"</p>
                            <div className='icons'>
                                <svg className="icon" id="twitter-icon" viewBox="0 0 512 512"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z" /></svg>
                                <svg className="icon" id="facebook-icon" viewBox="0 0 512 512"><path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z" /></svg>
                                <svg className="icon" id="googleplus-icon" viewBox="0 0 512 512"><path d="M179.7 237.6L179.7 284.2 256.7 284.2C253.6 304.2 233.4 342.9 179.7 342.9 133.4 342.9 95.6 304.4 95.6 257 95.6 209.6 133.4 171.1 179.7 171.1 206.1 171.1 223.7 182.4 233.8 192.1L270.6 156.6C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257 44 332.2 104.7 393 179.7 393 258 393 310 337.8 310 260.1 310 251.2 309 244.4 307.9 237.6L179.7 237.6 179.7 237.6ZM468 236.7L429.3 236.7 429.3 198 390.7 198 390.7 236.7 352 236.7 352 275.3 390.7 275.3 390.7 314 429.3 314 429.3 275.3 468 275.3" /></svg>
                                <svg className="icon" id="linkedin-icon" viewBox="0 0 512 512"><path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" /></svg>
                            </div>
                        </div>
                    </div>
                )
            })
            
            :
                    <p>Дані відсутні</p>
                    }
        </div>

    </>)
}

export default Card