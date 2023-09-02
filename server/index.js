const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/user');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/dataDB', { useNewUrlParser: true, useUnifiedTopology: true });


app.post('/register'    , async (req,res) => {  
  
    UserModel.create(req.body)
    .then((data) => {
        res.json(data)
    })
    .catch((err) => { 
        console.log(err);
    })
})

var details = [];




app.post('/checked'  , async (req,res) => {
    const {id , index} = req.body;
    details.push({id , index});

    UserModel.findById(id)
    .then(document => {
        if (!document) {
            return res.status(404).json({ error: 'Document not found' });
        }

        document.completedTasks += 1;
        if (document.completedTasks > document.totalTasks) {
            document.completedTasks = document.totalTasks;
            document.completionPercentage == 100;
        }
        document.completionPercentage = (document.completedTasks / document.totalTasks) * 100;

        document.tasks.splice(index, 1);
        if (document.completionPercentage == 100){

            document.status = "Completed";
            document.completionDate = new Date().toLocaleDateString();
            document.completionTime = new Date().toLocaleTimeString();
        }
        return document.save();
    })
    .then(updatedDocument => {
        console.log('Updated document:', updatedDocument);
        res.status(200).json({ message: 'Document updated successfully' });
    })
    .catch(error => {
        console.error('Error updating document:', error);
        res.status(500).json({ error: 'Internal server error' });
    });


 UserModel.updateOne(
    { _id: id },
    { $pull: { myArray: { $exists: true, $in: [index] } } }
  ).then(result => {
    console.log('Updated document:', result);})
  .catch(error => {
    console.error('Error updating document:', error);
  });


})

app.get('/getDetails' , async (req,res) => {
    res.json(details);
})

app.get('/getUsers' , async (req,res) => {
    const users = await UserModel.find({});
    res.json(users);
})

app.get('/getUsersOngoing' , async (req,res) => {
  const usersOngoing = await UserModel.find({status : 'Ongoing'});
  res.json(usersOngoing);
})

app.get('/getUsersCompleted' , async (req,res) => {
  const usersCompleted = await UserModel.find({status : 'Completed'});
  res.json(usersCompleted);
})

app.listen(5000, () => {
    console.log('Server started!');
});
