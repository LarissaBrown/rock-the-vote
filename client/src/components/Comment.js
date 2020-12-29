import React from 'react'
//import { UserContext } from '../context/UserProvider.js'
//import { IssueCommentContext } from '../context/IssueCommentContext.js'


export default function Comment(props) {
    //const { currentUser } = useContext(UserContext)
    //const {  } = useContext(IssueCommentContext)
    const { body, by } = props
    
    //console.log("currentUser", currentUser)
    return(
        <div>
        <p>{body}</p>
        <p className="by">comment by: {by}</p>
        </div>
    )
}