import BoxReveal from '../magicui/box-reveal';
import Button from '../magicui/shimmer-button'; 
import { Link } from 'react-router-dom';
const BoxRevealDemo = () => {
  return (
    <div className="h-screen w-full flex flex-col items-start justify-center max-w-[32rem] overflow-hidden pt-8 px-4">
      <BoxReveal boxColor={"#ee9b00"} duration={0.5}>
        <p className="text-[4.8rem] font-semibold text-left" style={{fontSize:'4rem'}}>
          Justice Forge<span className="text-[#ee9b00]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#ee9b00"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1.8rem] text-left"> 
          Premier Legal Services for{" "}
          <span className="text-[#ee9b00]">Your Rights</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#ee9b00"} duration={0.5}>
        <div className="mt-[1.5rem] text-left"> {/* Aligned text to left */}
          <p className="text-[1.44rem]"> {/* Increased font size by 20% */}
            Expert legal guidance with a focus on
            <span className="font-semibold text-[#ee9b00]"> Integrity</span>,
            <span className="font-semibold text-[#ee9b00]"> Expertise</span>,
            and
            <span className="font-semibold text-[#ee9b00]"> Justice</span>
            . <br />
            Committed to protecting your rights with utmost dedication. <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#ee9b00"} duration={0.5}>
        <Button className="mt-[1.6rem] bg-[#ee9b00] text-white"> <Link to="/consultation">Consult Us</Link></Button>
      </BoxReveal>
    </div>
  );
};

export default BoxRevealDemo;
