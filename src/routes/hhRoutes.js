import { 
    addNewProduct,
    getProducts,
    getProductWithID,
    updateProduct,
    deleteProduct
} from '../controllers/productController';
import {
    addNewCategory,
    getCategories,
    getCategoryWithID,
    updateCategory,
    deleteCategory
} from '../controllers/categoryController';
import {
    addNewProductCategory,
    getProductCategories,
    getProductCategoryWithID,
    deleteProductCategory
} from '../controllers/productCategoryController';

const routes = (app) => {
    app.route('/product')
        // get all products
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originlUrl}`)
            console.log(`Reqest from: ${req.method}`)
            next();
        }, getProducts)

        //Post endpoint
        .post(addNewProduct);
    
    app.route('/product/:productID')
        //get a specific product
        .get(getProductWithID)

        // updating a specific product
        .put(updateProduct)

        // deleting a specific product
        .delete(deleteProduct);

    // category endpoints
    app.route('/category')
        .get(getCategories)
        .post(addNewCategory);
    app.route('/category/:categoryID')
        .get(getCategoryWithID)
        .put(updateCategory)
        .delete(deleteCategory);

    // product category endpoints
    app.route('/productCategory')
        .get(getProductCategories)
        .post(addNewProductCategory);
    app.route('/productCategory/:productCategoryID')
        .get(getProductCategoryWithID)
        .delete(deleteProductCategory);
}

export default routes;