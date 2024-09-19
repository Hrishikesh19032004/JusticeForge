import React from 'react';
import BoxReveal from '../magicui/box-reveal';

const BoxRevealAbout = () => {
  return (
    <div className="mt-[1.5rem] text-left p-4 rounded-lg">
      <BoxReveal boxColor={"#ee9b00"} duration={0.5}>
        <h2 className="text-[2.4rem] font-semibold text-white" style={{fontSize:'4rem',fontWeight:'50'}}>
          Who Are We<span className="text-[#ee9b00]">.</span>
        </h2>
      </BoxReveal>
      <BoxReveal boxColor={"#ee9b00"} duration={0.5}>
        <p className="text-[1.44rem] text-white mt-2" style={{fontSize:"1.3rem",fontWeight:"100", color:"white"}}>
          We are a dedicated team of legal professionals<br/> committed to providing exceptional service and expert guidance.
          <span className="font-semibold text-[#ee9b00]"><br/> Excellence</span> and 
          <span className="font-semibold text-[#ee9b00]"> Integrity</span> are at the core of our practice.
        </p>
      </BoxReveal>
      
      <BoxReveal boxColor={"#ee9b00"} duration={0.5}>
        <p className="text-[1.44rem] text-white mt-2">
          At our firm, we believe in a client-centered approach,<br/>  prioritizing your needs and providing 
          <span className="font-semibold text-[#ee9b00]"><br/>  Personalized Support</span> and 
          <span className="font-semibold text-[#ee9b00]"> Effective Solutions</span>.
        </p>
      </BoxReveal>
      <BoxReveal boxColor={"#ee9b00"} duration={0.5}>
        <p className="text-[1.44rem] text-white mt-2">
          Whether you need assistance with legal matters related to<br/>  family, business, or personal rights, we are here to offer 
          <span className="font-semibold text-[#ee9b00]"> <br/> Expert Advice</span> and 
          <span className="font-semibold text-[#ee9b00]"> Compassionate Support</span>.
        </p>
      </BoxReveal>
    </div>
  );
};

export default BoxRevealAbout;
