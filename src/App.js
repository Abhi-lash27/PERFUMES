import React from 'react';
import './style.css'; // Make sure to import your CSS file
import { Link } from "react-router-dom";
function App() {
    return (
        <section>
            <div className="intro">
                <div className="navbar">
                    
                    <ul>
                        <li><Link to="about">about</Link></li>
                        <li><Link to="products">Products</Link></li>
                        <li><Link to="order">Order Here</Link></li>
                    </ul>
                    
                </div>
                <div className="content">
                    <h2 style={{ fontSize: '80px'}}>CRAFT BY SAASH</h2>
                    <p>Our business is a small firm business consisting of home made products</p>
                    <div className="option">
                        <button type="button"><span></span>SCRUNCHIES</button>
                        <button type="button"><span></span>SCENTED CANDLES</button>
                        <button type="button"><span></span>HOME DECOR</button>
                        <button type="button"><span></span>CUSTOMISABLES</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;
