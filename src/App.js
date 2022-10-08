import React from 'react';

import './App.css';

import Student from './components/Student'

import studentData from './data/studentData.js'
import asgmtData from './data/asgmtData.js'

function App() {
  const students=studentData.map(studentData=> <Student key={studentData.key} id={studentData.id} fname={studentData.fname} lname={studentData.lname} asgmtData={asgmtData}/>)

  function saveGrades(){
    for (let i = 0; i < studentData.length; i++) {
      for (let j = 0; j < asgmtData.length; j++) {
        let coordinate=(String(i)+String(j))
        let cellValue=document.getElementById(coordinate).value
        localStorage.setItem(coordinate, cellValue)
      }
    }
  }

  function loadGrades(){
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 10; j++) {
        let coordinate=(String(i)+String(j))
        document.getElementById(coordinate).value=localStorage.getItem(coordinate)

      }
    }
  }

  return (
      <div className='gradeBook'>
        {students}
        <button onClick={saveGrades} className='save'>Save</button>
        <button onClick={loadGrades} className='save'>Load</button>
      </div>
  )
}

export default App;
