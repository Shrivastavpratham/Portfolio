import React from 'react';
import "./skills.css";
import Frontend from './WebDev';
import Backend from './DataAnalysis';
import Devops from './DevOps';
import Dataanalysis from './DataAnalysis';
const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical Lvl</span>
        <div className="skills__container container grid">
            <Frontend />
            <Devops />
            <Dataanalysis /> 
            
        </div>
    </section>
  );
}

export default Skills;