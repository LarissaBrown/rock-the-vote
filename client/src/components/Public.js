import React, { useContext } from 'react'
import IssueList from './IssueList'
import { UserContext } from '../context/UserProvider'
import { IssueCommentContext } from '../context/IssueCommentContext'



export default function Public(){

    const {
        issues,
        addComment
    } = useContext(UserContext)

    const {
        getIssues
    } = useContext(IssueCommentContext)
    
    return (
        <div className="public">
            <h3>Current Issues</h3>
            <IssueList issues={ issues } getIssues={getIssues} addComment={addComment}/>
        </div>
    )
}