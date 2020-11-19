import React, { useContext, useEffect } from 'react'
import IssueForm from './IssueForm'
import IssueList from './IssueList'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import  {IssueCommentContext} from '../context/IssueCommentContext'


export default function Profile(){

    const {
        user: {
            username
        },
        logout,
    } = useContext(UserContext)

    const {
        getIssues,
        addIssue,
        issues
    } = useContext(IssueCommentContext)

    useEffect(()=> {
        getIssues()
    }, [getIssues])


    
    return (
        <div className="profile">
            <h1>Welcome @{username}!</h1>
            <Link to='/'><button onClick={logout}>Logout</button></Link>
            <h3>Bring Up An Issue</h3>
            <IssueForm addIssue={addIssue}/>
            <h3>Your Issues</h3>
            <IssueList issues={ issues } getIssues={getIssues}/>
        </div>
    )
}