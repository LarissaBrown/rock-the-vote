import React,  {useContext} from 'react'
//import { UserContext } from '../context/UserProvider.js'
import { IssueCommentContext } from '../context/IssueCommentContext.js'


export default function Comment(props) {
    //const { currentUser } = useContext(UserContext)
    const { comment } = useContext(IssueCommentContext)
    const { body , username} = props
    
    console.log("commentUserName", username)
    
    return(
        <div>
        <p>{body}</p>
       <p className="by">comment by: {username}</p>
        </div>
    )
}