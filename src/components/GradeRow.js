import React from 'react'

function GradeRow(props){
    return(
        <>
            <p className='student'>{props.name}</p>
            
            <div className='score'>
                <input type='text' className='gradeInput'></input>
                <p className='totalPoints'>{'/' + props.totalPoints1}</p>
            </div>
            <div className='score'>
                <input type='text' className='gradeInput'></input>
                <p className='totalPoints'>{'/' + props.totalPoints2}</p>
            </div>
            <div className='score'>
                <input type='text' className='gradeInput'></input>
                <p className='totalPoints'>{'/' + props.totalPoints3}</p>
            </div>
            <div className='score'>
                <input type='text' className='gradeInput'></input>
                <p className='totalPoints'>{'/' + props.totalPoints4}</p>
            </div>
            <div className='score'>
                <input type='text' className='gradeInput'></input>
                <p className='totalPoints'>{'/' + props.totalPoints5}</p>
            </div>
            <div className='score'>
                <input type='text' className='gradeInput'></input>
                <p className='totalPoints'>{'/' + props.totalPoints6}</p>
            </div>
            <div className='score'>
                <input type='text' className='gradeInput'></input>
                <p className='totalPoints'>{'/' + props.totalPoints7}</p>
            </div>
            <div className='score'>
                <input type='text' className='gradeInput'></input>
                <p className='totalPoints'>{'/' + props.totalPoints8}</p>
            </div>
            <div className='score'>
                <input type='text' className='gradeInput'></input>
                <p className='totalPoints'>{'/' + props.totalPoints9}</p>
            </div>
            <div className='score'>
                <input type='text' className='gradeInput'></input>
                <p className='totalPoints'>{'/' + props.totalPoints10}</p>
            </div>
        </>
    )
}

export default GradeRow