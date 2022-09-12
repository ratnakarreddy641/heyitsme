import React from 'react'
import data1 from '../Data.json'
function Grad() {
  const data = data1.Education;
  return (
    <div className='Contain'>
        <div>
        <h2>Education</h2>
        {data.map((edu, i) => {
        return (
          <div key={i}>
            <div className="Cards">
              <h3>{edu.College}</h3>
              <h1>{edu.Degree}</h1>
              <h1>{"Branch: "+ edu.Branch}</h1>
              <h1>{edu.DOJ+" - "+edu.DOL}</h1>
            </div>
          </div>
        );
      })}
        </div>
        <div>
        <h2>Projects</h2>
        {data1.Projects.map((proj, i) => {
        return (
          <div key={i}>
            <div className="proj Cards">
              <h3>{proj.Name}</h3>
              <h1>{proj.TechStack}</h1>
              <h1>{"Type: "+ proj.Type}</h1>
              <h1>{"Description: "+proj.Description}</h1>
              <a href={proj.Link} target='_blank'>Link to documentation</a>
            </div>
          </div>
        );
      })}
        </div>
    </div>
  )
}

export default Grad;