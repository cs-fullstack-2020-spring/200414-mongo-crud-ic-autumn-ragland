# 200414 Mongo CRUD IC

[Resource - MDN Mongo Info](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#Connecting_to_MongoDB) |
[Resource - Mongoose Methods](https://mongoosejs.com/docs/api/model.html)

### Schema
```JavaScript
{
    videoTitle : String,
    videoEditor : String,
    videoActor : String,
    videoDuration : Number
}
```
### Using Mongoose
- Connect to your Mongo Database and set up error message in your entry point file using the code snippet below
```JavaScript
// CONNECTING TO A MONGO DATABASE
// reference the mongoose module 
let mongoose = require('mongoose');
// connect to database
let mongoDB = '[YOUR-CONNECTION-STRING]'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
// connection error message
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
```
### CRUD Operations
For each endpoint you will need to :
- Display errors if there are any
- If there are no errors display results
- Test endpoints in postman 
#### Create Video 
- Use the `create()` mongoose method to create a new video at the correct endpoint
- View in Mongoose

#### Read A Video
- Use the `findOne()` mongoose method to find a video by title at the correct endpoint

#### Read Multiple Videos
- Use the `find()` mongoose method to display all videos at the correct endpoint

#### Update a Video
- Use the `findOneAndUpdate()` mongoose method to find a video by title and update it at the correct endpoint

#### Delete a Video
- Use the `findOneAndDelete()` mongoose method to find a video by title and delete it at the correct endpoint