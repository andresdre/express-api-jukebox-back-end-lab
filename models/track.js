const mongoose = require('mongoose')


const trackSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    artist: {
        type: String,
        required: true
    },
})

const TrackModel = mongoose.model("Track", trackSchema)

module.exports = TrackModel;