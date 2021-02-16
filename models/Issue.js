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
        body: String, 
        by: {
            type:Schema.Types.ObjectId, 
            ref: 'User'
        }
    }],

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        
    },
    // voteNum: {
    //     type: Number,
    //     required: false, 
    //     default: 0
    // },
    upVotes: {
        type: [Schema.Types.ObjectId],
        ref: 'User'
    },
    downVotes: {
        type: [Schema.Types.ObjectId],
        ref: 'User'
    }
})

issueSchema.virtual("voteNum").get(function() {
    return this.upVotes.length - this.downVotes.length
})

module.exports = mongoose.model("Issue", issueSchema)