// Define a schema for user authentication
const mongoose = require('mongoose');

// Schema for User
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // Additional user information
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    // Other fields as needed
});

// Compile the schema into a model
const User = mongoose.model('User', userSchema);

module.exports = User;
