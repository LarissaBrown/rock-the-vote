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
    comments: [{body: String, by: {type:Schema.Types.ObjectId, ref: 'User'}}],

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        
    },

    voteNum: {
        type: Number,
        required: false, 
        default: 0

    }
    
 
})

module.exports = mongoose.model("Issue", issueSchema)