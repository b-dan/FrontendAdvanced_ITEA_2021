import React from "react";
import "../stopwatch/stopwatch.css";


function Stopwatch({ onInterval, out, onClearInterval, elapsedTimeReset }) {
    return (
        <>
            <div className='container'>
                <section className="top">
                    <h3 className="top-name">STOPWATCH</h3>
                    <div className="top-out-block">{out}</div>
                </section>
                <div className="buttons">
                    <button className='btn start' onClick={(event) => { onInterval() }}><div>Start</div></button>
                    <button className='btn pause' onClick={(event) => { onClearInterval() }}><div>Pause</div></button>
                    <button className='btn reset' onClick={(event) => { elapsedTimeReset() }}><div>Reset</div></button>
                </div>
            </div>
        </>
    )
}

export default Stopwatch