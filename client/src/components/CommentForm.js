import React, {useState, useContext} from 'react'
import {IssueCommentContext} from '../context/IssueCommentContext'
import { useLocation } from 'react-router-dom'

const initInputs = {
   
  body: '',
  by:{}
}
    
    

console.log("Comment", IssueCommentContext)
export default function CommentForm(props){
   
    const { addComment, getIssues, getUserIssues } = useContext(IssueCommentContext)
   
   
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
        console.log(props.issueId)
        addComment(inputs, props.issueId)
        setInputs(initInputs)
        console.log(useLocation.pathname)
        useLocation.pathname === "/public"? getIssues(): getUserIssues()
            
        
        
    }

    const { body } = inputs

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="body"
                value={body}
                onChange={handleChange}
                placeholder="comment"
               />
                
                <button>Add Comment</button>
        </form>
    )
}