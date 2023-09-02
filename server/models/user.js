const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    companyName: String,
    name: String,
    desc: String,
    date: String,
    tasks: Array,
    Tasks: {
        type: Array,
        default: function () {
            return this.tasks;
        }
    },
    status: {
        type: String,
        default: 'Ongoing'
    },
    totalTasks: {
        type: Number,
        default: function () {
            return this.tasks.length;
        }
    },
    completedTasks: {
        type: Number,
        default: 0
    },
    completionDate: String,
    completionTime: String,
    completionPercentage: {
        type: Number,
        default: 0,
        set: (value) => parseFloat(value.toFixed(2))
        
    }
});

const UserModel = mongoose.model('data', userSchema);
module.exports = UserModel;
