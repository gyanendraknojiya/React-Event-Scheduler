require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(app.listen(process.env.PORT, function() {
    console.log('server is running at port' + process.env.PORT);
}));
;

const eventSchema = new mongoose.Schema({
    eventName: String,
    eventStart: String,
    eventEnd: String
});

const Event = new mongoose.model('event', eventSchema);
app.get('/', (req, res)=>{
    res.send('hello')
})

app.post('/', (req, res)=>{
    const {eventName, eventStart, eventEnd} = req.body;
    const NewEvent = new Event({
    eventName: eventName,
    eventStart: eventStart,
    eventEnd: eventEnd
    })
    NewEvent.save().then( res.send('event added'))
})




