import React from "react";
import "../Skills/Skills.css";
import Skill from "../Skill/Skill";
import Interests from "../Interests/Interests";

function Skills() {
  return (
    <>
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        <Skill title="HTML" rating="5" />
        <Skill title="CSS" rating="4" />
        <Skill title="JAVASCRIPT" rating="4" />
        <Skill title="REACT" rating="4" />
        <Skill title="NODE" rating="3" />
        <Skill title="RUBY" rating="3" />
        <Skill title="GITHUB" rating="4" />
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="Anglais" rating="4" />
        <Skill title="Italien" rating="3" />
      </div>
      <Interests />
    </>
  );
}

export default Skills;
