import React, { useContext, useEffect } from 'react'
import IssueList from './IssueList'
import { IssueCommentContext } from '../context/IssueCommentContext'



export default function Public(props){

   

    const {
        getIssues,
        addComment,
        getComments,
        issues,
        username
    } = useContext(IssueCommentContext)
   


    useEffect(()=> {
        //handleEffect()
        
        getIssues([])
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="public">
            <h3>Current Issues</h3>
            <IssueList issues={ issues } username={username} getComments={getComments} getIssues={getIssues} addComment={addComment}/>
        </div>
    )
}