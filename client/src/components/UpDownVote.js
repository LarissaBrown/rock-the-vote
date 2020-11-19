import React, {useState} from "react"



const alreadyVoted = []





export default function UpDownVote (props){
    const [voteNum, setVoteNum] = useState(0)
    const {userId, issueId} = props

    const increment = (num) => {
        return setVoteNum(num++)
    }
    
    const decrement = (num) => {
        return setVoteNum(num--)
    }
    
    const handleVoteUp =(e) => {
        e.preventDefault()

    //if alreadyVoted contains the userId and the issueId of the current event then give alert "You have already voted"
        if(alreadyVoted.contains(userId && issueId)) {
            alert ("you have already voted for this issue")
        } else {
    //else 
        increment(voteNum)
    //then push the userId and the issueId to the alreadyVoted array
        alreadyVoted.push(userId, issueId)
        return voteNum
    
    }}
    
    const handleVoteDown = (e) => {
        e.preventDefault()
    //if alreadyVoted contains the userId and the issueId of the current event then five alert "You have already voted"
        if(alreadyVoted.contains(userId && issueId)) {
            alert ("you have already voted for this issue")
        } else {
    //else
        decrement(voteNum)
    //then push the userId and the issueId to the alreadyVoted array
        alreadyVoted.push(userId, issueId)

    return voteNum
    }}
    
    
    

    return(
        <div>
            <button onClick={handleVoteUp}>Up Vote</button>
            <h2>{voteNum}</h2>
            <button onClick={handleVoteDown}>Down Vote</button>
        </div>
    )
}