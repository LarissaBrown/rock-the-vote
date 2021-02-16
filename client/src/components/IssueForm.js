import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'



const initInputs = {
    //title: '',
    description: '',
    user: {
        username: ''
    },
    comments:{
        by: {
            username: ''
        }
    }

    
   
    
}

export default function IssueForm(props){

    const [inputs, setInputs] = useState(initInputs)
    const {addIssue, getIssues, getUserIssues, issues} = props
    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs, 
            [name]: value
        }))
    }

    function handleSubmit(e, id){
        e.preventDefault()
        id = user.id
        addIssue(inputs)
        setInputs(initInputs)
        if(useLocation.pathname === "/public") {
            getIssues()
            console.log("issues", issues)
            console.log("public issues")
        }else if(useLocation.pathname === "/profile"){
            getUserIssues(id)
            console.log("private issues")
        }
        
        
    }

    const { title, description } = inputs

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="title"/>
            <input 
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Description"/>
                <button>Add Issue</button>
        </form>
    )
}