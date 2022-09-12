import React from "react";
import data1 from "../Data";
function Experience() {
  const data = data1.Experiences;
  return (
 
      <div className="Experiences">      
      <h3 className="Heading" >Experiences</h3>
      {data.map((experience, i) => {
        return (
          <div key={i}>
            <div className="Cards">
              <h3>{experience.Company}</h3>
              <h1>{experience.Position}</h1>
              <h1>{"Skill: "+ experience.Skill}</h1>
              <h1>{experience.DOJ+" - "+experience.DOL}</h1>
              <h1>{"Role: "+experience.Role}</h1>
            </div>
          </div>
        );
      })}
    </div>
    
  );
}

export default Experience;
