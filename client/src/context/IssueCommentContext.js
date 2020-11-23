import React, {  useState } from "react";
import { userAxios } from "./UserProvider";




export const IssueCommentContext = React.createContext();

export default function IssueCommentProvider(props) {
	
    const [issues, setIssues] = 
    useState( [])
    
  

	//const [currentIssue, setCurrentIssue] = useState(null);
    
   

    const getIssues = () => {
        userAxios.get(`/api/issue`) 
        .then(response => {
            setIssues(response.data)
        })
    }
    const getComments = (id)=> {
        console.log(id, "this is the id")
        userAxios.get(`/api/issue/${id}`)
        .then(response => {
            console.log("response data",response.data)
            setIssues(prevIssues => prevIssues.map(issue => issue._id === id? {...issue, comments:response.data} : issue))  
        }).catch(err => console.dir(err))
    }
	const addIssue = (issue, id) => {
		userAxios.post(`/api/issue/${id}`, {issue}).then(response => {
			setIssues(prevIssues => [...prevIssues, response.data]);
		}).catch(err => console.dir(err));
    };
    
    const addComment = (comment, id)=> {
        console.log("comment",comment)
        userAxios.post(`/api/comment/${id}`, comment).then(response => {
         //   setComments(prevComments => [...prevComments, response.data]); 
         setIssues(prevIssues => prevIssues.map(issue => issue._id === id? {...issue, comments: [...issue.comments, response.data]} : issue))    
        }).catch(err => console.dir(err));
    }


	
	const updateIssue = (id, data) => {
		userAxios.put(`/api/issue/${id}`, data).then(response => {
			const index = issues.findIndex(issue => issue._id === id);
			const updated = [...issues];
			updated[index].issue = response.data;
			setIssues(updated);
		}).catch(err => console.dir(err));
	};
    
    const updateComment = (id, data) => {
		userAxios.put(`/api/comment/${id}`, data).then(response => {
			//const index = comments.findIndex(comment => comment._id === id);
			//const updated = [...comments];
			//updated[index].comment = response.data;
			//setComments(updated);
		}).catch(err => console.dir(err));
	};
	const deleteIssue = id => {
		userAxios.delete(`/api/issue/${id}`).then(response => {
			setIssues(prevIssues => prevIssues.filter(issue => issue._id !== id));
		}).catch(err => console.dir(err));
	};
	

	return (
        <IssueCommentContext.Provider 
        value = {{
            issues, 
            //currentIssue, 
            //setCurrentIssue,
            addIssue,
            updateIssue,
            deleteIssue,
            addComment,
            updateComment,
            getIssues,
            getComments
           
             }}>
			{props.children}
		</IssueCommentContext.Provider>
	);
}