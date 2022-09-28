const router = require('express').Router();
const notes = require('../../db/db')

// add GET and POST requests here
router.get('/notes', (req, res) => {
    res.json(notes)
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    notes.push(req.body);
    res.json(notes);
});

module.exports = router;