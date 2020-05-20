import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CategorySchema =  new Schema({
    name: {
        type: String,
        required: 'Enter a name'
    },
    description: {
        type: String,
        required: 'Enter a description'
    }
});