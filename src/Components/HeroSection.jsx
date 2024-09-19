import React from 'react';
import lawImage from '../Images/Books.jpg'; // Assuming you have a law-themed image
import "../Styles/HeroSection.css";

const HeroSection = () => {
    return (
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p className="hero-subtitle" style={{fontSize:"2rem",fontWeight:"100", color:"white"}}>Master the Law</p>
                        <h1 style={{fontSize:"3rem",fontWeight:"100", color:"white"}}>Welcome to Justice Forge</h1>
                        <p style={{fontSize:"1.3rem",fontWeight:"100", color:"white"}}>
                            Enhance your understanding of legal principles with our comprehensive law learning platform. 
                            Whether you're a student, a professional, or just interested in legal matters, our tailored resources 
                            will help you gain in-depth knowledge and navigate legal complexities effectively.
                        </p>
                        <div className="btn-group">
                            <a href="/courses">
                                <button className="btn primary-btn" style={{backgroundColor:"#ee9b00",color:"black"}}>
                                    Explore Courses
                                </button>
                            </a>
                            <a href="/contact">
                                <button className="btn secondary-btn" style={{borderColor:"#ee9b00",color:"#ee9b00",marginLeft:'3rem'}}>
                                    Get in Touch
                                </button>
                            </a>
                        </div>
                        <p className="law-text" style={{color: "white"}}>Explore our legal insights and resources.</p> {/* Law text */}
                    </div>

                    <div className="hero-images">
                        <img src={lawImage} width="600px" height="500px" alt="Legal analysis" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HeroSection;
