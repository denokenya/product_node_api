//import express
import express from "express";

//import controllers
import{
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";

//express router
const route =express.Router();

//get All products
route.get('/',getProducts);
//get single Product
route.get('/:id',getProductById);
//CREAT product
route.post('/',saveProduct);
//UPDATE product
route.patch('/:id',updateProduct);
//DELETE Product
route.delete('/:id',deleteProduct);

//export router
export default route;
