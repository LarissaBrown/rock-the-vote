import React, {useContext} from 'react'
import CommentForm from './CommentForm'
import UpDownVote from './UpDownVote'
import CommentList from './CommentList'
import { UserContext } from '../context/UserProvider.js'



export default function Issue(props){
    const {token } = useContext(UserContext)
    const { title, description, _id, addComment, comments } = props
    //console.log("comments", comments)
    //console.log("token", token)
    return(
        <div className="issue">
            <h1 className="issue-title">{title}</h1>
            <UpDownVote issueId={_id} userId={token}/>
            <h3 className="issue-description">{description}</h3>
            <CommentForm issueId={_id} addComment={addComment}/>
            <CommentList comments={comments} issueId={_id}/>

        </div>
    )
}