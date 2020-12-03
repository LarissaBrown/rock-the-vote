const mongoose = require('mongoose')
const Schema = mongoose.Schema


const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [{
        text: String,
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    alreadyVoted: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
  
    //userswho have upvoted and downvoters array  route returns users who have voted.length ?
})

module.exports = mongoose.model("Issue", issueSchema)