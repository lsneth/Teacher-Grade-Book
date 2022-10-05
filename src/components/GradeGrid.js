import React from 'react'
import GradeRow from './GradeRow'
import TitleRow from './TitleRow'

function GradeGrid(){
    return(
        <div className='gradeGrid'>
            <TitleRow/>
            <GradeRow/>
        </div>
    )
}

export default GradeGrid