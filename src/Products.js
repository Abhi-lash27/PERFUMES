import React from 'react';
import './craft.css';
import { Link } from "react-router-dom";
import scrunch from "./images/scrunch.jpg"
import cand from "./images/cand.jpg"
import ccand from "./images/ccand.jpg"
import scented from "./images/scented.jpg"
import cscrunch from "./images/cscrunch.jpg"
import cscrunch1 from "./images/cscrunch1.jpg"
import redscrunch from "./images/redscrunch1.jpg"
import cscrunch2 from "./images/cscrunch2.jpg"
import cscrunch3 from "./images/csrunch3.jpg"


function Products() {
    return (
        <div>
            <h1>CRAFT BY SAASH</h1>
            <div className="navbar">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </nav>
            </div>
            <section className="items">
                <div className="item">
                    <img src={scrunch} alt="scrunchies" />
                    <h4>Vodka - 500.00</h4>
                    <button>Order</button>
                </div>
                <div className="item">
                    <img src={cand} alt="scrunchies" />
                    <h4>Caramel - 300.00</h4>
                    <button>Order</button>
                </div>
                <div className="item">
                    <img src={ccand} alt="scrunchies" />
                    <h4>Chocolate - 450.00</h4>
                    <button>Order</button>
                </div>
                <div className="item">
                    <img src={scented} alt="scrunchies" />
                    <h4>Honey - 250.00</h4>
                    <button>Order</button>
                </div>
                <div className="item">
                    <img src={cscrunch} alt="scrunchies" />
                    <h4>scrunchies </h4>
                    <button>Order</button>
                </div>
                <div className="item">
                    <img src={cscrunch1} alt="scrunchies" />
                    <h4>scrunchies </h4>
                    <button>Order</button>
                </div>
                <div className="item">
                    <img src={redscrunch} alt="scrunchies" />
                    <h4>scrunchies </h4>
                    <button>Order</button>
                </div>
                <div className="item">
                    <img src={cscrunch2} alt="scrunchies" />
                    <h4>scrunchies </h4>
                    <button>Order</button>
                </div>
                <div className="item">
                    <img src={cscrunch3} alt="scrunchies" />
                    <h4>scrunchies </h4>
                    <button>Order</button>
                </div>
            </section>
        </div>
    );
}

export default Products;