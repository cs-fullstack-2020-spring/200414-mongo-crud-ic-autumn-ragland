// imported mongoose module
let mongoose = require('mongoose');
// created ref to mongoose Schema class
let Schema = mongoose.Schema;

// defined model
let VideoSchema = new Schema(
    {
        videoTitle : String,
        videoEditor : String,
        videoActor : String,
        videoDuration : Number
    }
);

// exported mongoose model
module.exports = mongoose.model('video200414', VideoSchema);