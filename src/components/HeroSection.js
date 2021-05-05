import React from 'react'

import '../App.css'
import { Button } from './Button'
import './HeroSection.css'





function HeroSection() {

   const onClick = () => {
        window.location.href="https://gmail.com";
    };
    return (
        <div className="hero-container">
            <video src="video-2.mp4" autoPlay loop muted />
          
            <h1>I'M MOHAMED</h1>
            <p>A Software Engineer And I Built Awesome Applications</p>
            <i className="fas fa-map-marker-alt"></i>
            <div className="mylocation">Bangkok, Thailand</div>           
            <div className="hero-btns">
                <Button onClick={onClick} type="button"  className='btn' buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    Email me
                </Button>
                
            </div>
        </div>
    )
}

export default HeroSection;
