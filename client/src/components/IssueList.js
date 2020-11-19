import React from "react"
import Issue from "./Issue"


export default function IssueList (props){
    const { issues, addComment} = props
    return(
        <div className="issue-list">
            { issues.map(issue => <Issue addComment={addComment} { ...issue} key={issue._id}/>)}
        </div>
    )
}