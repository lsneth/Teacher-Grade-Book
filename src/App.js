import React, {useRef} from 'react';

import './App.css';

import Student from './components/Student'
import scoreRef from './components/Assignment'

import studentData from './data/studentData.js'
import asgmtData from './data/asgmtData.js'


function App() {
  const students=studentData.map(studentData=> <Student key={studentData.id} fname={studentData.fname} lname={studentData.lname} asgmtData={asgmtData}/>)
  
  function save(event){
    const score=scoreRef.current.value
    console.log(score)
  }
  
  return (
      <div className='gradeBook'>
        {students}
        <button onClick={save}>Save</button>
      </div>
  )
}

export default App;
