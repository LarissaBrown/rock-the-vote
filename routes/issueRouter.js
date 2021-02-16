const express = require('express')
const issue = require('../models/issue.js')
const issueRouter = express.Router()
const Issue = require('../models/issue.js')
const User = require('../models/user')

//Get All Issues
issueRouter.get("/", (req, res, next) => {
    Issue.find()
        .populate("user", "username")
        .populate({
            path: "comments",
            populate: {
                path: "by",
                select: "username"
            }
        })
        .exec(function(err, issues) {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

//Get Issues by User Id
issueRouter.get("/user", (req, res, next) => {
    Issue.find()
    .populate('user', "username")
    .populate({
        path: "comments",
        populate: {
            path: "by",
            select: "username"
        }
    })
    .exec(function(err, issues) {
        if (err) {
            res.status(500)
            return next(err)
        }
   
        return res.status(200).send(issues)
    })
})

//Add new Comment

issueRouter.post("/:issueId/comment", (req, res, next) => {
    req.body.by = req.user._id
   Issue.findOneAndUpdate(
       {_id: req.params.issueId},
       {$push: {comments:{...req.body, by: req.user}}},
       {new: true},
       (err, updatedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        //return res.status(201).send(issue)
        return res.status(201).send(updatedIssue.comments[updatedIssue.comments.length])}
      
   )
})
//Get Issue
issueRouter.get("/:issueId", (req, res, next)=> {
    Issue.findOne(
        {_id: req.params.issueId},
        (err, issue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(issue)
        }
    )
})


//Delete Issue
issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete(
        {_id: req.params.issueId, user: req.user._id},
        (err, deletedIssue) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}`)
        }
    )
})

//Update Issue
issueRouter.put('/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId, user: req.user._id},
        console.log(req.params.issueId),
        req.body,
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }
    )
})
//Add new Issue 
issueRouter.post("/", (req, res, next) => {
    req.body.user = req.user

    const newIssue = new Issue({
        ...req.body,
        })
    newIssue.save((err, savedIssue) => {
        if(err){
        res.status(500)
        return next(err)
    }
    return res.status(201).send(savedIssue)
    })
})



// '/api/issue/upvote'
issueRouter.get('/user/upvote/:issueId', (req, res, next) => {
    const { issueId } = req.params
    User.findOneAndUpdate({_id: req.user._id}, {$push: {upVotedIssues: issueId}, $pull: {downVotedIssues: issueId}}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }

        // Only updates if it hasn't updated before
        if (!user.upVotedIssues.includes(issueId) && !user.downVotedIssues.includes(issueId)) {
            Issue.findByIdAndUpdate({_id: issueId}, 
                {$inc: {voteNum: 1 }}, 
                (err, issue) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send({voteNum: issue.voteNum})
               
            })
        } else if (user.downVotedIssues.includes(issueId)) {
            Issue.findByIdAndUpdate({_id: issueId}, {$inc: {voteNum: 2 }}, (err, issue) => {
                if (err) {
                    res.status(500)
                    return next(err)
                } 
               return res.status(201).send({voteNum: issue.voteNum})
            })
        }
    })

    // User.findOne({_id: req.user._id}, (err, user) => {
    //     if (err) {
    //         res.status(500)
    //         return next(err)
    //     }
        
    //     Issue.findById({_id: issueId}, (err, issue) => {
    //         if (err) {
    //             res.status(500)
    //             return next(err)
    //         }

    //         return res.status(201).send({user: user.withoutPassword(), issue})
    //     })
    // })
})

// '/api/issue/downvote'
issueRouter.get('/user/downvote/:issueId', (req, res, next) => {
    const { issueId } = req.params
    User.findOneAndUpdate({_id: req.user._id}, {$push: {downVotes: issueId}, $pull: {upVotes: issueId}}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        
        if (!user.downVotedIssues.includes(issueId) && !user.upVotedIssues.includes(issueId)) {
            Issue.findByIdAndUpdate({_id: issueId}, {$inc: {voteNum: -1}}, (err, issue) => {
                if (err) {
                    res.status(500)
                    return next(err)
                } 
                return res.status(201).send({ voteNum: issue.voteNum} )
            })
        } else if (user.upVotedIssues.includes(issueId)) {
            Issue.findByIdAndUpdate({_id: issueId}, {$inc: {voteNum: -2}}, (err, issue) => {
                if (err) {
                    res.status(500)
                    return next(err)
                } 
                return res.status(201).send({ voteNum: issue.voteNum})
            })
        }
    })
    // User.findOne({_id: req.user._id}, (err, user) => {
    //     if (err) {
    //         res.status(500)
    //         return next(err)
    //     }
        
        
    //  Issue.findById({_id: issueId}, (err, issue) => {
    //         if (err) {
    //             res.status(500)
    //             return next(err)
    //         }
            
    //         return res.status(201).send({user: user.withoutPassword(), issue})
    //     })
    // })
})



module.exports = issueRouter
