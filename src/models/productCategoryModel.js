import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProductCategorySchema =  new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: 'Enter a productId'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: 'Enter a categoryId'
    }
});