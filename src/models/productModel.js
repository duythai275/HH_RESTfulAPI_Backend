import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProductSchema =  new Schema({
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
    },
    price: {
        type: Number,
        required: 'Enter the price'
    },
    image: {
        type: String,
        required: 'Enter the image path',
        unique: true
    },
    weeklySpecial: {
        type: Boolean,
        default: false
    },
    onSale: {
        type: Number
    }
});