import React from 'react'

const componentTemplate = (props) => {
    return (
        <div className='box'>
            <div className='box-title'>{props.title}</div>
            <div className='box-matter'>{props.matter}</div>
        </div>
    )
}

export default componentTemplate