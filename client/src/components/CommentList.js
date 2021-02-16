import React, {useContext} from "react"
import Comment from "./Comment"
import {IssueCommentContext} from '../context/IssueCommentContext'

export default function CommentList (props){
  
    const { comments }= useContext(IssueCommentContext)
    let i = 0
    console.log(comments)

    return(
        <div className="comments-list">
            {comments && comments.map(comment => 
            <Comment { ...comment } key={comment[i]}/>
            ) }
        </div>
    )
}   