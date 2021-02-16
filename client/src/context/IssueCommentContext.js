import React, {useState} from "react";
import { userAxios } from "./UserProvider";




export const IssueCommentContext = React.createContext();

export default function IssueCommentProvider(props) {
   
    const [issue, setIssue] = useState({})
    const [issues, setIssues] = useState([])
    const [comments,  setComments] = useState([])
    const [comment, setComment] = useState("")
    const [voteNum, setVoteNum] = useState(Number)

  

	//const [currentIssue, setCurrentIssue] = useState(null);
    
   

    const getIssues = () => {
        userAxios.get(`/issue`) 
        .then(response => {
            setIssues(...issues, response.data) 
         })
         .catch(err => console.error(err))
            
        }
    
   
    // const getIssue = (id)=> {
    //      //console.log(id, "this is the id")
    //     userAxios.get(`/api/issue/${id}`)
    //     .then(response => {
    //         //console.log("response data",response.data)
    //         setIssue(prevIssues => prevIssues.map(issue => issue._id === id? {...issue, comments:response.data} : issue)) 
    //     }).catch(err => console.error(err))
    // }
	
    
    // const addComment = (comment, id)=> {
    //     console.log("comment",comment)
    //     userAxios.post(`/api/comment/${id}`, comment).then(response => {
    //     setComments(prevComments => [...prevComments, response.data]); 
    //     //setIssues(prevIssues => prevIssues.map(issue => issue._id === id? {...issue, comments: [...issue.comments, response.data]} : issue))    
    //     }).catch(err => console.dir(err));
    // }


	
	const updateIssue = (id, data) => {
		userAxios.put(`/api/issue/${id}`, data).then(response => {
			const index = issues.findIndex(issue => issue._id === id)
			const updated = [...issues];
			updated[index].issue = response.data;
			setIssues(updated);
		}).catch(err => console.dir(err));
    };
    
   
    
    // const updateComment = (id, data) => {
	// 	userAxios.put(`/api/comment/${id}`, data).then(response => {
	// 		//const index = comments.findIndex(comment => comment._id === id);
	// 		//const updated = [...comments];
	// 		//updated[index].comment = response.data;
	// 		//setComments(updated);
	// 	}).catch(err => console.dir(err));
    //};
    

	const deleteIssue = id => {
		userAxios.delete(`/api/issue/${id}`).then(response => {
			setIssues(prevIssues => prevIssues.filter(issue => issue._id !== id), response.data);
		}).catch(err => console.dir(err));
    };
    
	function getUserIssues(id){
        userAxios.get(`/api/issue/${id}`).then(response =>(
        setIssues(response.data)
        ))
        .catch(err => console.log(err.response.data.errMsg))
    }
    const addIssue = (issue) => {
        	userAxios.post(`/api/issue`, issue).then(response => {
                setIssues(prevIssues => [...prevIssues, response.data]);
                
        	}).catch(err => console.dir(err));
        };
    const addComment = (body, id) => {
        	userAxios.post(`/api/issue/${id}/comment`, body).then(response => {
                setIssues(prevIssues => [...prevIssues.filter(issue => issue._id !== id)]);
                setComments(prevComments => [...prevComments, response.data]);
                
        	}).catch(err => console.dir(err));
        };
    function upVoteIssue(id) {
            userAxios.get(`/api/issue/user/upvote/${id}`)
              .then(res => {
                 
                setVoteNum(res.data.voteNum)
              
                
                })
        }
        
    function downVoteIssue(id) {
            userAxios.get(`/api/issue/user/downvote/${id}`)
              .then(res => {
                
                setVoteNum(res.data.voteNum)   
            })
        }
      
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
            //updateComment,
            getIssues,
            getUserIssues,
            //getIssuesUsername,
            upVoteIssue,
            downVoteIssue,
            //getIssue,
            issue,
            comment,
            
         
            voteNum,
            //getComments,
            comments
      
             }}>
			{props.children}
		</IssueCommentContext.Provider>
	);
}