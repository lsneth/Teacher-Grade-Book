import React from 'react'

function Assignment(props){
    return(
        <div className='assignment'>
            <input type='text' className='scoreInput'></input>
            <p className='totalPoints'>{'/' + props.totalPoints}</p>
        </div>
    )
}

export default Assignment