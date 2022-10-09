import React, {useEffect} from 'react'

import './App.css'

import Student from './components/Student'
import Navbar from './components/Navbar'

import studentData from './data/studentData.js'
import asgmtData from './data/asgmtData.js'

function App() {
  const students=studentData.map(studentData=> <Student key={studentData.key} id={studentData.id} fname={studentData.fname} lname={studentData.lname} asgmtData={asgmtData}/>)

  function saveGrades(){
    for (let i = 0; i < studentData.length; i++) {
      for (let j = 0; j < asgmtData.length; j++) {
        let coordinate=(String(i)+String(j))
        let cellValue=document.getElementById(coordinate).firstChild.value
        let cellColor=document.getElementById(coordinate).style.backgroundColor
        localStorage.setItem(coordinate, cellValue)
        localStorage.setItem(coordinate+'color', cellColor)
      }
    }
  }

  function clearGrades(){
    for (let i = 0; i < studentData.length; i++) {
      for (let j = 0; j < asgmtData.length; j++) {
        let coordinate=(String(i)+String(j))
        let cellValue=''
        let cellColor='white'
        localStorage.setItem(coordinate, cellValue)
        localStorage.setItem(coordinate+'color', cellColor)
      }
    }
    loadGrades()
  }

  function loadGrades(){
    for (let i = 0; i < studentData.length; i++) {
      for (let j = 0; j < asgmtData.length; j++) {
        let coordinate=(String(i)+String(j))
        let gradeBox=document.getElementById(coordinate)
        gradeBox.firstChild.value=localStorage.getItem(coordinate)
        gradeBox.style.backgroundColor=localStorage.getItem(coordinate+'color')
      }
    }
  }

  useEffect(()=>loadGrades, [])

  return (
    <>
      <Navbar/>
      <main>
        <div className='grades' id='grades'>
          {/* render dynamically */}
          <p></p>
          <p>{asgmtData[0].name}</p>
          <p>{asgmtData[1].name}</p>
          <p>{asgmtData[2].name}</p>
          <p>{asgmtData[3].name}</p>
          <p>{asgmtData[4].name}</p>
          <p>{asgmtData[5].name}</p>
          <p>{asgmtData[6].name}</p>
          <p>{asgmtData[7].name}</p>
          <p>{asgmtData[8].name}</p>
          <p>{asgmtData[9].name}</p>
          {students}
        </div>
        <button onClick={saveGrades} className='save'>Save</button>
        <button onClick={clearGrades} className='clear'>Clear</button>
      </main>
    </>

  )
}

export default App;
