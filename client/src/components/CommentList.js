import React, { useEffect, useContext } from "react"
import Comment from "./Comment"
import {IssueCommentContext} from '../context/IssueCommentContext'

export default function CommentList (props){
    const { comments, issueId} = props

    const {getComments} = useContext(IssueCommentContext)

    useEffect(()=> {
        getComments(issueId)
        console.log("working?")
    }, [getComments, issueId])

    
   

    return(
        <div className="comments-list">
            {comments && comments.map(comment => <Comment { ...comment } key={comment._id}/>) }
        </div>
    )
}   