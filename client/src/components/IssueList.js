import React from "react"
import Issue from "./Issue"


export default function IssueList (props){
    const { issues
    } = props
    return(
        <div className="issue-list">
            { issues.map(issue => <Issue 
           
            { ...issue} key={issue.title} />)}
        </div>
    )
   
}