import React from "react";
import img from '../../img/top-img.png'
import './app.css';


function App() {
    {document.querySelector('#root').style = "width: 1278px; margin:0 auto;"}
    return(<>
    
    <body>
        <header>
            <h1>Ra<span>mda.js</span></h1>
            <ul className="menu">
                <li className="head-menu"><a href='#'>Functional Programming</a></li>
                <li className="head-menu"><a href='#'>Ramda</a></li>
                <li className="head-menu"><a href='#'>Fantasy Land Spec</a></li>
                <li className="head-menu"><a href='#'>Node.js for all</a></li>
            </ul>
        </header>
        <main>
            <div className="main-block">
                <div className="menu-block">
                    <ul className="main-menu">
                        <li className="in-main-menu"><a href='#'>Ramda</a></li>
                        <li className="in-main-menu"><a href='#'>Why Ramda?</a></li>
                        <li className="in-main-menu"><a href='#'>What's Different?</a></li>
                        <li className="in-main-menu"><a href='#'>Introductions</a></li>
                        <li className="in-main-menu"><a href='#'>Philosophy</a></li>
                    </ul>
                </div>
                <div className="right-block">
                    <div className="main-img">
                        <img src={img}></img>
                    </div>
                    <div className="text-block">
                    <p>Lorem ipsum — классическая панграмма, условный, зачастую бессмысленный текст-заполнитель, 
                        вставляемый в макет страницы. Используется в качестве заполнителя по крайней мере с XVI века.
                        Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», 
                        написанного в 45 году до н. э. на латинском языке, обнаружение сходства атрибутируется Ричарду МакКлинтоку.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div className="footer-block">
                <ul className="footer-menu">
                    <li className="in-footer-menu"><a href='#'>Ramda</a></li>
                    <li className="in-footer-menu"><a href='#'>Why Ramda?</a></li>
                    <li className="in-footer-menu"><a href='#'>What's Different?</a></li>
                    <li className="in-footer-menu"><a href='#'>Introductions</a></li>
                    <li className="in-footer-menu"><a href='#'>Philosophy</a></li>
                </ul>
                <p className="footer-copyright">Copyright © 2018</p>
            </div>
        </footer>
    </body>
    </>)
}

export default App;