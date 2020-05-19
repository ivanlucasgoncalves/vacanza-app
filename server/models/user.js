import mongoose from 'mongoose';
const { Schema } = mongoose;

// Create Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
