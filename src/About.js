import React from 'react';
import './styles.css'; // Make sure to adjust the path to your stylesheet
import { Link } from "react-router-dom";
import gift from "./gift.jpg"

function About() {
  return (
    <div className="container">
      <div className="here">
        <nav>
          <a href="#" className="logo">SAASH</a>
          <div className="nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="product">Products</Link></li>
            <li><Link to="contact">Contact</Link></li>
          </ul>
          </div>
        </nav>
        <div className="content">
          <div className="div-text">
            <h1>CRAFT by SAASH</h1>
            <h5>Creating crafts, one click at a time!</h5>
            <p>Our website is a digital canvas that showcases the intricate tapestry of handmade products, each woven with passion and expertise. 
            Let us guide you through the journey of how we've meticulously crafted our online home to reflect the essence of our artisanal treasures.</p>
          </div>
          <div className="div-img">
            <img src={gift} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;