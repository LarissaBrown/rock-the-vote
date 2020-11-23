import React, { useContext } from 'react'
import IssueList from './IssueList'
import { UserContext } from '../context/UserProvider'



export default function Public(){

    const {
        issues,
        addComment
    } = useContext(UserContext)
    return (
        <div className="public">
            <h3>Current Issues</h3>
            <IssueList issues={ issues } addComment={addComment}/>
        </div>
    )
}