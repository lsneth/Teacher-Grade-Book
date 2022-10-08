import React from 'react'

function Assignment(props){
    
    function colorGrade(){
        document.getElementById().style.backgroundColor = 'red'
    }

    return(
        <div className='assignment'>
            <input type='number' onFocusOut={colorGrade} className='grade' id={String(props.studentId)+String(props.id)}></input>
            <p className='totalPoints'>{'/' + props.totalPoints}</p>
        </div>
    )
}

export default Assignment