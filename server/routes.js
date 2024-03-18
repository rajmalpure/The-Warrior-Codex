const express = require('express');
const router = express.Router();
const  war = require('./schema');
const Joi = require("joi")

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

const newSchema = Joi.object({
  Warrior: Joi.string().required(),
  BirthYear: Joi.number().required(),
  DeathYear: Joi.number().required(),
  State: Joi.string().required(),
  FamousBattle: Joi.string().required(),
  Image: Joi.string().required()
});




// router.post('/post', (req, res) => {
//     res.send("Create");
//   // Handler for POST method (Create)
// });

// router.put('/put', (req, res) => {
//     res.send("Update");
//   // Handler for PUT method (Update)
// });

// router.delete('/delete', (req, res) => {
//     res.send("Delete");
//   // Handler for DELETE method (Delete)
// });


router.post('/add', async (req, res) => {

  try {
      const { error } = newSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
      const newData = war.create(req.body);
      res.send(" successful");
  } catch (error) {
      console.error(error);
      res.send('Error');  
  }
});

router.get('/get/:id', async (req,res) => {
  const _id = req.params.id
  war.findById({_id})
  .then(users => res.json(users))
  .catch(err => console.log(err))
})

router.put('/update/:id', async (req, res) => {
  try {
      const { error } = newSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
      }
      const updatedData = await war.findByIdAndUpdate(req.params.id, req.body, { add: true });
      if (!updatedData) {
          return res.status(404).json({ error: 'Data not found' });
      }
      console.log('Data updated:', updatedData);
      res.status(200).json({ message: 'Data updated successfully', data: updatedData });
  } catch (err) {
      console.error('Error in PUT request:', err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
      const deletedData = await war.findByIdAndDelete(req.params.id); 
      if (!deletedData) {
          return res.status(404).json({ error: 'Data not found' });
      }
      console.log('Data deleted:', deletedData);
      res.status(200).json({ message: 'Data deleted successfully' });
  } catch (err) {
      console.error('Error in DELETE request:', err);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
