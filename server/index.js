const express = require('express');
const port = 8000;
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
app.get('/', (req, res) => {
    var options = {
        root: path.join(__dirname)
    };
    res.sendFile('/templates/index.html', options);
})
app.get('/home', (req, res) => {

    mongoose.connect(mongoUrl, { useUnifiedTopology: true })
        .then(() => { console.log('Connected to MongoDB: %s \n ', mongoUrl) })
        .catch((err) => { console.log('MongoDB connection error: %s \n', err); })
    const db=mongoose.connection;
    db.createCollection('posts')
    db.posts.insert({title: "First Post", slug: "first-post", author: "salitha", description: "This is the post 1 description"})
db.posts.insert({title: "Second Post", slug: "second-post", author: "salitha", description: "This is the post 2 description"})
db.posts.insert({title: "Third Post", slug: "third-post", author: "salitha", description: "This is the post 3 description"})

    res.send("THis is a home page")
})
app.get('*', (req, res) => {
    res.status(404);
    res.send("404 NOT FOUND")
})
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})