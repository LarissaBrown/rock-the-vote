import React, {useState, useContext} from 'react'
import {IssueCommentContext} from '../context/IssueCommentContext'

const initInputs = {
   text: ''
    
}
console.log("Comment", IssueCommentContext)
export default function CommentForm(props){
   
    const { addComment } = useContext(IssueCommentContext)

    const [inputs, setInputs] = useState(initInputs)
    
    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs, 
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addComment(inputs, props.issueId)
        //setInputs(initInputs)
    }

    const { text } = inputs

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="text"
                value={text}
                onChange={handleChange}
                placeholder="comment"/>
                <button>Add Comment</button>
        </form>
    )
}