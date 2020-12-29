import React, {useContext} from "react"
import {IssueCommentContext} from '../context/IssueCommentContext'







export default function UpDownVote (props){
    

  
const { issueId } = props
const { voteNum, downVoteIssue, upVoteIssue } = useContext(IssueCommentContext)


    
const handleVoteUp =(e) => {
    e.preventDefault()
    upVoteIssue(issueId)
   
    

}

const handleVoteDown = (e) => {
    e.preventDefault()
    downVoteIssue(issueId)
    

}
   
    return(
        <div>
           <button onClick={handleVoteUp}>Up Vote</button>
            <h2>{voteNum}</h2>
            <button onClick={handleVoteDown}>Down Vote</button>
        </div>
    )
}