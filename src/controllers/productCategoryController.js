import mongoose from 'mongoose';
import { ProductCategorySchema } from '../models/productCategoryModel';

const ProductCategory = mongoose.model('ProductCategory', ProductCategorySchema);

export const addNewProductCategory = (req, res) => {
    let newProductCategory =  new ProductCategory(req.body);

    newProductCategory.save( (err, productCategory) => {
        if (err) {
            res.send(err);
        }
        res.json(productCategory);
    });
}

export const getProductCategories = (req, res) => {
    ProductCategory.find({}, (err, productCategory) => {
        if (err) {
            res.send(err);
        }
        res.json(productCategory);
    });
}

export const getProductCategoryWithID = (req, res) => {
    ProductCategory.findById(req.params.categoryID, (err, productCategory) => {
        if (err) {
            res.send(err);
        }
        res.json(productCategory);
    });
}

export const deleteProductCategory = (req, res) => {
    ProductCategory.remove({_id: req.params.categoryID}, (err, productCategory) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Successfully deleted product category!'});
    });
}