import React from "react";
import "../FormationsExperiences/FormationsExperiences.css";
import DataFormations from "../datas/Formations";
import Formations from "../Formations/Formations";
import DataExperiences from "../datas/Experiences";
import Experiences from "../Experiences/Experiences";

function FormationsExperiences() {
  console.log(DataFormations);
  return (
    <>
      <Formations datas={DataFormations} />
      <Experiences datas={DataExperiences} />
    </>
  );
}

export default FormationsExperiences;
