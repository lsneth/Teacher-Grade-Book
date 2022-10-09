import React from 'react'

function Assignment(props){

    function colorGrade(){
        const blue='#d1f3ff'
        const green='#d0f0b6'
        const yellow='#ffefc8'
        const red='#f68d8e'
        let color=''

        if(document.getElementById(props.id).firstChild.value/props.totalPoints>=1){
            color=blue
        }
        else if(document.getElementById(props.id).firstChild.value/props.totalPoints>=.8){
            color=green
        }
        else if(document.getElementById(props.id).firstChild.value/props.totalPoints>=.6){
            color=yellow
        }
        else{
            color=red
        }
        document.getElementById(props.id).style.backgroundColor = color
    }

    return(
        <div className='assignment' id={props.id}>
            <input type='number' onInput={colorGrade} className='gradeInput' placeholder='-'></input>
            <p className='totalPoints'>{'/' + props.totalPoints}</p>
        </div>
    )
}

export default Assignment