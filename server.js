require('./conf/db');
const express = require('express');
const task_router= require('./routers/task')
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json())

// use cors domain to allow origin
app.use(cors());
app.use(bodyParser.json());

app.listen(port, ()=> console.log('Server on',port));


// TASK PATH
app.use('/api/Task',task_router);
