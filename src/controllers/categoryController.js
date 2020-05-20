import mongoose from 'mongoose';
import { CategorySchema } from '../models/categoryModel';

const Category = mongoose.model('Category', CategorySchema);

export const addNewCategory = (req, res) => {
    let newCategory =  new Category(req.body);

    newCategory.save( (err, category) => {
        if (err) {
            res.send(err);
        }
        res.json(category);
    });
}

export const getCategories = (req, res) => {
    Category.find({}, (err, category) => {
        if (err) {
            res.send(err);
        }
        res.json(category);
    });
}

export const getCategoryWithID = (req, res) => {
    Category.findById(req.params.categoryID, (err, category) => {
        if (err) {
            res.send(err);
        }
        res.json(category);
    });
}

export const updateCategory = (req, res) => {
    Category.findOneAndUpdate({_id: req.params.categoryID}, req.body, { new: true,useFindAndModify: false }, (err, category) => {
        if (err) {
            res.send(err);
        }
        res.json(category);
    });
}

export const deleteCategory = (req, res) => {
    Category.remove({_id: req.params.categoryID}, (err, category) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Successfully deleted category!'});
    });
}