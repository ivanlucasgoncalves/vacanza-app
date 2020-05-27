import mongoose from 'mongoose';
import beautifyUnique from 'mongoose-beautiful-unique-validation';
const { Schema } = mongoose;

// Create Schema
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: 'Two users cannot share the same email ({VALUE})'
    },
    password: {
        type: String,
        required: true,
    }
});

// Enable beautifying on this schema
UserSchema.plugin(beautifyUnique);

const User = mongoose.model('user', UserSchema);
module.exports = User;
