const express = require('express');
const router = express.Router();
const  war = require('./schema')

router.use(express.json()) 

// Define CRUD routes and handlers
router.get('/get', async (req, res) => {
  try {
      const sword = await war.find(); 
      res.json(sword); 
  } catch (err) {
      console.error('Error in GET request:', err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
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


router.post('/new', async (req, res) => {
  try {
      const newData = war.create(req.body);
      res.send(newData);
  } catch (error) {
      console.error(error);
      res.send('Error');
  }
});

module.exports = router;
