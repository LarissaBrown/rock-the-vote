import React from "react"
import Comment from "./Comment"


export default function CommentList (props){
  

    const { comments } = props
    
    console.log(comments)

    return(
        <div className="comments-list">
            {comments && comments.map(comment => <Comment { ...comment } key={comment._id}/>) }
        </div>
    )
}   