import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CategorySchema =  new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: 'Enter a name'
    },
    description: {
        type: String
    }
});