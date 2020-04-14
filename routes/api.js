// import express
let express = require('express');
// create router
let router = express.Router();
// json middleware
router.use(express.json());
// import mongoose model
let VideoCollection = require('../models/VideoSchema');

// test route
router.get('/test', (req,res) => {
    res.send("Test working");
});

// get all  videos
router.get('/', (req,res) => {
    // res.send("Get all method worked");
    // mongoose find method to find any video that matches the search criteria
    // param 1 = filter on (no filter to find all videos)
    // param 2 = callback function to send errors OR results using ternary
    VideoCollection.find({}, (errors, results) => {
        errors ? res.send(errors) : res.send(results)
    });
});

// get video by title
router.get('/:videoTitle', (req,res) => {
    // res.send("Get by title method worked");
    // mongoose findOne method to find first video that matches the search criteria
    // param 1 = filter {property to filter on : property value to match}
    // param 2 = callback function to send errors OR results using ternary
    VideoCollection.findOne({videoTitle : req.params.videoTitle}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    });
});

// create video
router.post('/', (req,res) => {
    // res.send("Post method worked");
    // mongoose create method to create a new document in your collection
    // param 1 = document
    // param 2 = callback function to send errors OR results using ternary
    VideoCollection.create(req.body, (errors,results) => {
        errors ? res.send(errors) : res.send(results);
    });
});

// update video
router.put('/:videoTitle', (req,res) => {
    // res.send("Put method worked");
    // mongoose findOneAndUpdate method to find the first video that matches the search criteria and update it
    // param 1 = filter on (no filter to find all videos)
    // param 2 = filter {property to filter on : property value to match}
    // param 3 = document
    VideoCollection.findOneAndUpdate({videoTitle : req.params.videoTitle}, req.body, (errors,results) => {
        errors ? res.send(errors) : res.send(results);
    });
});

// delete video
router.delete('/:videoTitle', (req,res) => {
    // res.send("Delete method worked");
    // mongoose findOneAndDelete method to find first video that matches the search criteria and delete it
    // param 1 = filter {property to filter on : property value to match}
    // param 2 = callback function to send errors OR message using ternary
    VideoCollection.findOneAndDelete({videoTitle : req.params.videoTitle}, (errors, results) => errors ? res.send(errors) : res.send(`${req.params.videoTitle} was deleted`));
});

// export router
module.exports = router;