const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

mongoose.connect('mongodb+srv://shapovala:k0GWNXZeZBuehfzd@mernstuding.sxamk.mongodb.net/mern?retryWrites=true&w=majority&appName=mernStuding');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.get('/getUsers', (req, res) => {
    UserModel.find({}).then(function(users) {
        res.json(users);
    }).catch(function(err) {
        res.json(err);
    })
});

app.post('/createUser', async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(user);
});