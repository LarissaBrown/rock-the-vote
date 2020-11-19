const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment.js')

//Get All Comments
commentRouter.get("/", (req, res, next) => {
    Comment.find((err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

//Get Comments by User Id
commentRouter.get("/user", (req, res, next) => {
    Comment.find({ user: req.user._id}, (err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

//Get Comments by Issue Id
commentRouter.get("/comment", (req, res, next) =>
{
    Comment.find({ issue: req.issue._id }, (err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})
//Add new Comment 
commentRouter.post("/:_id", (req, res, next) => {
    req.body.user = req.user._id
    req.body.issue = req.params._id
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
        if(err){
        res.status(500)
        return next(err)
    }
    return res.status(201).send(savedComment)
    })
})


//
//Delete Comment
commentRouter.delete("/:commentId", (req, res, next) => {
    Comment.findOneAndDelete(
        {_id: req.params.commentId, user: req.user._id },
        (err, deletedComment) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted comment: ${deletedComment.text}`)
        }
    )
})

//Update Comment
commentRouter.put('/:commentId', (req, res, next) => {
    Comment.findOneAndUpdate(
        {_id: req.params.commentId, user: req.user._id},
        req.body,
        {new: true},
        (err, updatedComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedComment)
        }
    )
})

module.exports = commentRouter