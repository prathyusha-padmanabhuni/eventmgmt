const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const path=require("path");
app.use(cors());
app.use(express.json());
// app.use('/public',express.static("C:/Users/riktam/Desktop/eventmngmnt/public"));
// console.log(path.join(__dirname+"/public"))
// app.use(express.static(path.join(__dirname , `/client/public`)))
console.log(path.join(__dirname , `./client/public`))
// console.log(path.join(__dirname , "/../public"))
 
app.use('/public',express.static("./client/public"));
const uri ="mongodb+srv://admin-prathyu:Prathyusha123@cluster0.l7q0r.mongodb.net/eventmgt";
 
mongoose.connect(uri,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });

// const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/userrouter');
const usersmainRouter = require('./routes/usermainrouter');
const usersubRouter = require('./routes/usersubrouter');
// app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/main', usersmainRouter);
app.use('/sub', usersubRouter);
if (process.env.NODE_ENV === 'production') {
    // Set Static Folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
};
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});