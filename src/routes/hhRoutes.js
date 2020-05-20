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
import {
    register,
    login,
    loginRequired
} from '../controllers/userController';

const routes = (app) => {

    app.route('/auth/register').post(register);
    app.route('/auth/login').post(login);

    app.route('/product')
        // get all products
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originlUrl}`)
            console.log(`Reqest from: ${req.method}`)
            next();
        }, loginRequired, getProducts)

        //Post endpoint
        .post(loginRequired, addNewProduct);
    
    app.route('/product/:productID')
        //get a specific product
        .get(loginRequired, getProductWithID)

        // updating a specific product
        .put(loginRequired, updateProduct)

        // deleting a specific product
        .delete(loginRequired, deleteProduct);

    // category endpoints
    app.route('/category')
        .get(loginRequired, getCategories)
        .post(loginRequired, addNewCategory);
    app.route('/category/:categoryID')
        .get(loginRequired, getCategoryWithID)
        .put(loginRequired, updateCategory)
        .delete(loginRequired, deleteCategory);

    // product category endpoints
    app.route('/productCategory')
        .get(loginRequired, getProductCategories)
        .post(loginRequired, addNewProductCategory);
    app.route('/productCategory/:productCategoryID')
        .get(loginRequired, getProductCategoryWithID)
        .delete(loginRequired, deleteProductCategory);
}

export default routes;