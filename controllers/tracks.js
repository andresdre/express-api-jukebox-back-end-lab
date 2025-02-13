const express = require('express');
const router = express.Router();
const TrackModel = require('../models/track');


router.get('/', async (req, res) => {
    try {
        const tracks = await TrackModel.find({});
        res.status(200).json(tracks);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});


router.get('/:trackId', async (req, res) => {
    try {
        const track = await TrackModel.findById(req.params.trackId);
        if (!track) return res.status(404).json({ message: 'Track not found' });
        res.status(200).json(track);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});


router.post('/', async (req, res) => {
    console.log(req.body, 'body of the request');
    try {
        const createdTrack = await TrackModel.create(req.body);
        res.status(200).json(createdTrack);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});


router.put('/:trackId', async (req, res) => {
    try {
        const updatedTrack = await TrackModel.findByIdAndUpdate(
            req.params.trackId,
            req.body,
            { new: true }
        );
        if (!updatedTrack) return res.status(404).json({ message: 'Track not found' });
        res.status(200).json(updatedTrack);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});


router.delete('/:trackId', async (req, res) => {
    try {
        const deletedTrack = await TrackModel.findByIdAndDelete(req.params.trackId);
        if (!deletedTrack) return res.status(404).json({ message: 'Track not found' });
        res.status(200).json({ message: 'Track deleted', deletedTrack });
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

module.exports = router;
