import React from "react";
import { Home } from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Consultation from "./Pages/Consultation";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Chatbot from "./Components/Chatbot";
import CrimeScope from "./Pages/CrimeScope";
import TrialTactics from "./Pages/TrialTactics";
import Detective from "./Components/Games/Detective";
import Game from "./Components/Game2/Game";
import Payments from './Pages/Payments'
import CourseDetails from "./Pages/CourseDetails";
import Courses from "./Pages/Courses";
import Contact from "./Pages/Contact";
// import Timeline from "./Components/Game3/Timeline";

// import PageNotFound from "./Pages/PageNotFOund";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="*" element={<PageNotFOund />} /> */}
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Consultation" element={<Consultation/>}></Route>
        <Route path="/CrimeScope" element={<CrimeScope/>}></Route>
        <Route path="/TrialTactics" element={<TrialTactics/>}></Route>
        
        
        <Route path="/Payments" element={<Payments/>}></Route>
        <Route path="/Courses" element={<Courses/>}></Route>
        <Route path="/Courses/:id" element={<CourseDetails/>}></Route>
        {/* <Route path="/Game3" element={<Timeline/>}></Route> */}
        
      </Routes>
      <Chatbot />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;


