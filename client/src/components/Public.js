import React, { useContext, useEffect } from 'react'
import IssueList from './IssueList'
import { IssueCommentContext } from '../context/IssueCommentContext'
import { UserContext } from '../context/UserProvider.js'



export default function Public(props){

   const { username, _id,  voteNum } = props

    const {
        getIssues,
        addComment,
        getComments,
        issues
      
    } = useContext(IssueCommentContext)
   const {
       user
   } = useContext(UserContext)

   

    useEffect(()=> {
        //handleEffect()
      
        getIssues([])
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="public">
            <h3>Current Issues</h3>
            <IssueList issues={ issues } user={user} issueId={_id} voteNum={voteNum} username={username} getComments={getComments} getIssues={getIssues} addComment={addComment}/>
        </div>
    )
}