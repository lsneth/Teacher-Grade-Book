import React from 'react'

function TitleRow(props){
    return(
        <>
            <div className='buttons'>
                <button className='editStudents'>Edit Students</button>
                <button className='editAssignments'>Edit Asgmts</button>
            </div>
            <p className='assignment'>{props.title1}</p>
            <p className='assignment'>{props.title2}</p>
            <p className='assignment'>{props.title3}</p>
            <p className='assignment'>{props.title4}</p>
            <p className='assignment'>{props.title5}</p>
            <p className='assignment'>{props.title6}</p>
            <p className='assignment'>{props.title7}</p>
            <p className='assignment'>{props.title8}</p>
            <p className='assignment'>{props.title9}</p>
            <p className='assignment'>{props.title10}</p>
        </>
    )
}

export default TitleRow