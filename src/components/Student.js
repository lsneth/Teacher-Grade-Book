import React from 'react'
import Assignments from './Assignment'

function Student(props){
    const assignments=props.asgmtData.map(asgmtData=> <Assignments key={asgmtData.key} id={String(props.id)+String(asgmtData.id)} name={asgmtData.name} totalPoints={asgmtData.totalPoints} studentId={props.id}/>)
    return(
        <> 
            <p className='student'>{props.fname} {props.lname}</p> 
            {assignments}
        </>
    )
}

export default Student