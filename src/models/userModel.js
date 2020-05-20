import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

export const UserSchema =  new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashPassword: {
        type: String,
        required: true
    }
});

UserSchema.methods.comparePassword = ( password, hashPassword ) => {
    return bcrypt.compareSync(password, hashPassword);
};