import React, {useContext, useState, useEffect} from 'react'
import CommentForm from './CommentForm'
import UpDownVote from './UpDownVote'
import CommentList from './CommentList'
import { IssueCommentContext } from '../context/IssueCommentContext'
import {UserContext} from '../context/UserProvider'
//Feedback from ISA: For the edit & delete functionality, I found it helpful to pass 
//in the issue Id to a edit and delete function, that way I could target the issue 
//that the button was attached to, and then I could attach the issue Id to the end of
// the url as a parameter.

export default function Issue(props){
  
    const { getIssues, getIssue } = useContext(IssueCommentContext)
    const { title, description, _id, username, comments,voteNum} = props
    const [editToggle, setEditToggle] = useState(false)

    const handleDelete = ()=>{


    }

    
    
    // useEffect(()=> {
    //     //handleEffect()
        
    //     getIssue([])
       
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return( 
        <div className="issue">
            <h1 className="issue-title">{title}</h1>
            <p className="username">posted by: username</p>
            <UpDownVote issueId={_id} voteNum={voteNum}
            />
            <h3 className="issue-description">{description}</h3>
            
            <CommentForm comments={comments} issueId={_id}  getIssues={getIssues}
            />
             <button 
            id="delete-btn" 
                onClick={()=> handleDelete(_id)}>
                Delete
            </button>
            <button 
            className="edit-btn"
                onClick={()=> setEditToggle(prevEditToggle=> !prevEditToggle)}>
                Edit
          </button>
            <CommentList comments={comments}/>

        </div>
    )
}