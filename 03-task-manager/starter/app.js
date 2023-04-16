console.log('Task Manager App')
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const port = 3000;
const connectDB = require('./db/connect')
require('dotenv').config()

app.use(express.json());
app.use('/api/v1/tasks', tasks);


app.get('/hello', (req, res) => {
    res.send('hellllllo');
});


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log('server is listening on port: ', port));
    } catch (error) {
        console.log(error)
    }
};

start();
