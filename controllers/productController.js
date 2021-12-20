//import model

import Product from "../models/Product.js";

//get All products

export const getProducts =async (req ,res) =>{
    try{
        const products =await Product.find();
        res.json(products);

    } catch (error) {
        res.status(500).json({message :error.message});
    }
}

//get single product

export const getProductById =async (req ,res) =>{

    try{
        const product = await Product.findById(req.params.id);
        res.json(product);

    } catch (error) {
        res.status(404).json({message: error.message});

    }
}

//create a product

export const saveProduct =async (req, res) =>{
    const product = new Product(req.body);
    try{
        const savedProduct =await product.save();
        res.status(201).json(saveProduct);

    } catch (error){
        res.status(400).json({message: error.message});
    }
}

//Update a Product

export const updateProduct =async (req,res) => {
    const cekId = await Product.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "No Data Found"});
    try {
        const updatedProduct =await Product.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedProduct)

    } catch (error){
        res.status(400).json({message: error.message});
    }

}

//Delete a product

export const deleteProduct = async (req,res) =>{
    const cekId = await Product.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "No Data Found"});
    try{
        const deletedProduct = await Product.deleteOne({_id: req.params.id});

    } catch (error){
        res.status(400).json({message :error.message});
    }


}