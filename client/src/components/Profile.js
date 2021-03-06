import React, { useContext, useEffect} from 'react'
import IssueForm from './IssueForm'
import IssueList from './IssueList'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import  {IssueCommentContext} from '../context/IssueCommentContext'



export default function Profile(props){
    const { voteNum, _id} = props
   
    const {
        user: {
            username
        },
        
        logout,
    } = useContext(UserContext)

    const {
        //getIssues,
        addIssue,
        addComment,
        getComments,
        issues,
        getUserIssues
    } = useContext(IssueCommentContext)

    // const handleEffect = useCallback(() => {
    //     getIssues()
    // }, [getIssues])


    useEffect(()=> {
        //handleEffect()
        
        getUserIssues([])
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ ])
    

    
    return (
        <div className="profile">
            <h1>Welcome @{username}!</h1>
            <Link to='/'><button onClick={logout}>Logout</button></Link>
            <h3>Bring Up An Issue</h3>
            <IssueForm addIssue={addIssue}/>
            <h3>Your Issues</h3>
            <IssueList issues={ issues } 
            issueId={_id} 
            voteNum={voteNum} 
            addComment={addComment} 
            getComments={getComments} 
            getIssues={getUserIssues} 
           />
        </div>
    )
}