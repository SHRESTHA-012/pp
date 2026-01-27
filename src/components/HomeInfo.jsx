import { Link } from "react-router-dom";
import React from 'react'

import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className ="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
           {btnText}
           <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I am <span className="font-semibold">Shrestha Dey</span>👋
        <br />
        A Computer Science Engineering student specializing in AIML
        </h1>
    ),
    2: (
        <InfoBox 
         text="Worked with Yonder Ai as an AI intern and picked up
         many skills along the way."
         link="/about"
         btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
         text="Turned many ideas into reality and cemented many visions. Curios about
         the impact?"
         link="/projects"
         btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
         text="Need a project done or worried about analysis the data.
         I am just a keystrokes away."
         link="/contact"
         btnText="Let's interact"
        />
    ),
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
