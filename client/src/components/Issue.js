import React, {useContext} from 'react'
import CommentForm from './CommentForm'
import UpDownVote from './UpDownVote'
import CommentList from './CommentList'
import { IssueCommentContext } from '../context/IssueCommentContext'



export default function Issue(props){
   
    const { getIssues } = useContext(IssueCommentContext)
    const { title, description, _id, comments, user} = props
    
    return( 
        <div className="issue">
            <h1 className="issue-title">{title}</h1>
            <p className="username">posted by: {user.username}</p>
            <UpDownVote issueId={_id}
            />
            <h3 className="issue-description">{description}</h3>
            
            <CommentForm issueId={_id}  getIssues={getIssues}
            />
            <CommentList comments={comments}/>

        </div>
    )
}