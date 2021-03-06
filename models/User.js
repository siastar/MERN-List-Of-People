const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema
//defines the data object prototype 

const UserSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: false
    },
    
    date: {
        type: Date,
        default: Date.now
    }
});

//Export data

module.exports = User = mongoose.model('user' , UserSchema);
