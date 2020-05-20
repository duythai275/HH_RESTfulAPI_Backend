import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProductSchema =  new Schema({
    name: {
        type: String,
        required: 'Enter a name'
    },
    description: {
        type: String,
        required: 'Enter a description'
    },
    price: {
        type: Number,
        required: 'Enter the price'
    },
    image: {
        type: String,
        required: 'Enter the image path'
    },
    available: {
        type: Boolean,
        default: true
    },
    onSale: {
        type: Number
    }
});