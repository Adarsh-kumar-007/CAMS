const mongoose=require('mongoose');
const mongoUrl='mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
mongoose.connect(mongoUrl, { useUnifiedTopology: true })
.then(() => { log('Connected to MongoDB: %s \n ', mongoUrl) }) 
.catch((err) => { error('MongoDB connection error: %s \n', err); })
