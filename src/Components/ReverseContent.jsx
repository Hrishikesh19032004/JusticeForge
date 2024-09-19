import React from 'react';
import lawImage from '../Images/LawWeights.png'; 
import '../Styles/ReverseContent.css'; 

const ReverseContent = () => {
    return (
        <section className="section-reverse" style={{marginTop:"-10rem"}}>
            <div className="container grid grid-two-cols-reverse">
                
                <div className="image">
                    <img src={lawImage} alt="Legal Expertise" />
                </div>

                <div className="content">
                    <p className="subtitle" style={{fontSize:"1rem",fontWeight:"100"}}>EXCEPTIONAL SERVICE</p>
                    <h1 style={{fontSize:"2.3rem",fontWeight:"100"}}>Trustworthy Legal Guidance <br /> From Our Experts</h1>
                    <p style={{fontSize:"1.2rem",fontWeight:"100"}}>
                        Our commitment to delivering outstanding legal services has earned us a reputation for excellence. 
                        We work tirelessly to ensure justice and achieve the best results for our clients.
                    </p>
                    <div className="stats" >
                        <div className="stat-item">
                            <p className="stat-number">200+</p>
                            <p className="stat-text" style={{fontSize:"1.2rem",fontWeight:"100"}}>Successful Cases</p>
                        </div>
                        <div className="stat-item">
                            <p className="stat-number">1000+</p>
                            <p className="stat-text" style={{fontSize:"1.2rem",fontWeight:"100"}}>Clients Served</p>
                        </div>
                        <div className="stat-item">
                            <p className="stat-number">50+</p>
                            <p className="stat-text" style={{fontSize:"1.2rem",fontWeight:"100"}}>Years of Expertise</p>
                        </div>
                        <div className="stat-item">
                            <p className="stat-number">30+</p>
                            <p className="stat-text" style={{fontSize:"1.2rem",fontWeight:"100"}}>Practice Areas</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReverseContent;
