import React, {useContext} from "react"
import {IssueCommentContext} from '../context/IssueCommentContext'
import { useLocation } from 'react-router-dom'







export default function UpDownVote (props){
    

  
const { issueId, voteNum } = props
const { downVoteIssue, upVoteIssue, getIssues, getUserIssues } = useContext(IssueCommentContext)


    
const handleVoteUp =(e) => {
    e.preventDefault()
    upVoteIssue(issueId)
    useLocation.pathname === "/public"? getIssues(): getUserIssues()
   
    

}

const handleVoteDown = (e) => {
    e.preventDefault()
    downVoteIssue(issueId)
    useLocation.pathname === "/public"? getIssues(): getUserIssues()
    

}
   
    return(
        <div>
           <button onClick={handleVoteUp}>Up Vote</button>
           <h2>{voteNum}</h2>
            <button onClick={handleVoteDown}>Down Vote</button>
        </div>
    )
}