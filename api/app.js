const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.options('*', cors()); // currently for development purpose, should be restricted in production env

app.use(express.json());

const {router} = require('./routes/people.js');
app.use('/people',router);

app.listen(port,()=> {
    console.log(`api is listening to the port ${port}`)
})