const express = require('express');
const app = express();
const port =  4001;
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const connection = process.env.URI;

const routes = require('./routes');

var cors = require('cors')
app.use(cors())
    
let connectionStatus = 'disconnected';

const startDatabase = async () => { 
    try {
        await mongoose.connect(connection);
        connectionStatus = ("Connected to database.");
    } catch (err) {
        console.error("Failed");
        connectionStatus = ("Failed");
    }
};

const stopDatabase = async () => {
    await mongoose.disconnect();
    connectionStatus = "Database disconnected";
};

app.get('/', (req, res) => {
  res.send(connectionStatus);
});

// define the ping route
app.get('/ping', (req, res) => {
  res.send("Hello Raj");
});

app.use('/', routes);

if (require.main === module) {
  app.listen(port, () => { 
    startDatabase()
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;


