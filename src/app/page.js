"use client"
import { useState } from 'react';


import RequirementBlock from './components/RequirementsBlock';
import RequirementsSummary from './components/RequirementsSummary';


export default function Home() {

  const [requirements, setRequirements] = useState(
    // sample data structure will look like this below
    // dictionary/object for every category
    [{category : '', requirements: ['']}]
);
  
  return (
    <div style={{ display: 'flex',
                  marginTop: '5%'}}>

    <RequirementBlock
      requirements = {requirements}
      setRequirements = {setRequirements} />

    <RequirementsSummary 
      requirements = {requirements} />

    </div>
  );
}
