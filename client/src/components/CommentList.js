import React from "react"
import Comment from "./Comment"
//import { IssueCommentContext } from '../context/IssueCommentContext'

export default function CommentList (props){
  
    //const { issueId } = props

    const { comments} = props

    //useEffect(()=> {
        //handleEffect()
         //getComments(issueId)  
    //})

    // const handleEffect = useCallback(()=> {
    //     getComments(issueId)
    // },[getComments, issueId])
    
   

    return(
        <div className="comments-list">
            {comments && comments.map(comment => <Comment { ...comment } key={comment._id}/>) }
        </div>
    )
}   