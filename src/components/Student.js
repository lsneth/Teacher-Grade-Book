import React from 'react'
import Assignments from './Assignment'

function Student(props){
    const assignments=props.asgmtData.map(asgmtData=> <Assignments key={asgmtData.id}name={asgmtData.name} totalPoints={asgmtData.totalPoints}/>)
    return(
        <>
            <p className='student'>{props.fname} {props.lname}</p> 
            {assignments}
        </>
    )
}

export default Student