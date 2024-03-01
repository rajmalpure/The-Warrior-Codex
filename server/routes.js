const express = require('express');
const router = express.Router();


// Define CRUD routes and handlers
router.get('/get', (req, res) => {
    res.send("Read");
  // Handler for GET method (Read)
});

router.post('/post', (req, res) => {
    res.send("Create");
  // Handler for POST method (Create)
});

router.put('/put', (req, res) => {
    res.send("Update");
  // Handler for PUT method (Update)
});

router.delete('/delete', (req, res) => {
    res.send("Delete");
  // Handler for DELETE method (Delete)
});

module.exports = router;
