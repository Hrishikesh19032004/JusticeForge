import React from 'react';
import "../Styles/About.css";
import lawImage from '../Images/Lawyers.jpg'; 
import { MarqueeDemo } from '../Components/MarqueeDemo';
import BoxRevealAbout from '../Components/BoxReveal/BoxRevealAbout';

const About = () => {
    return (
        <div className="about-container" style={{ marginLeft: '3rem', marginRight: '3rem', marginTop: '6rem' }}>
            {/* Flexbox container to arrange BoxRevealAbout and Image side by side */}
            <div className="flex-container">
                <div className="box-reveal">
                    <BoxRevealAbout />
                </div>
                <div className="image-container">
                    <img src={lawImage} alt="Legal Expertise" />
                </div>
            </div>

            <div>
                <MarqueeDemo />
            </div>
        </div>
    );
};

export default About;
