import React from "react";
import Exchange from "../exchange";
import "./app.css";

function App () {
    return(
        <>
        <table>
            <tbody>
                <tr>
                    
                    <th>Назва валюти</th>
                    <th>Курс до гривні</th>
                    <th>Позначення</th>
                </tr>
                <Exchange/>
            </tbody>
        </table>
        </>
    )
}
export default App;