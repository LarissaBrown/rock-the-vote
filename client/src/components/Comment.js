import React from 'react'

export default function Comment(props) {

    const {text} = props
    return(
        <div>
        <p>{text}</p>
        </div>
    )
}