"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.getProduct = void 0;
const data_1 = require("../data");
const response_data_model_1 = require("../models/response-data.model");
// get products from products array and send
function getProduct(req, res) {
    const { name } = req.query;
    let product = data_1.products.filter((product) => product.name === name)[0];
    if (product) {
        return res.status(200).json(new response_data_model_1.ResponseData(true, 200, product));
    }
    // otherwise return products
    return res.status(200).json(new response_data_model_1.ResponseData(true, 200, data_1.products));
}
exports.getProduct = getProduct;
function addProduct(req, res) {
    const { name, price, queryProducts } = req.body;
    console.log(req.body);
    if (name && price) {
        const singleProduct = {
            id: data_1.products.length + 1,
            name: name,
            price: Number(price),
        };
        data_1.products.push(singleProduct);
        return res.status(201).json(new response_data_model_1.ResponseData(true, 201, singleProduct));
    }
    if (queryProducts) {
        let nextIndex = data_1.products.length + 1;
        const newProducts = [
            ...data_1.products,
            ...queryProducts.map((product) => {
                const newProduct = {
                    id: nextIndex,
                    name: product.name,
                    price: product.price,
                };
                nextIndex += 1;
                return newProduct;
            }),
        ];
        return res.status(201).json(new response_data_model_1.ResponseData(true, 201, newProducts));
    }
    return res
        .status(400)
        .json(new response_data_model_1.ResponseData(false, 400, { message: "malformed query!" }));
}
exports.addProduct = addProduct;
function updateProduct(req, res) {
    const { id } = req.params;
    const { name, price } = req.body;
    // check if id exists and is found in products
    if (id &&
        data_1.products.filter((product) => product.id === Number(id)).length === 0) {
        return res.status(404).json(new response_data_model_1.ResponseData(false, 404, {
            message: "No product with a matching id was found!",
        }));
    }
    // check if name & price props exist and then commit the data
    if (name && price) {
        data_1.products[Number(id) - 1] = {
            id: Number(id),
            name: name,
            price: Number(price),
        };
        return res
            .status(204)
            .json(new response_data_model_1.ResponseData(true, 204, data_1.products[Number(id)]));
    }
    // assume the query is malformed if the last if statement is not true
    return res
        .status(400)
        .json(new response_data_model_1.ResponseData(false, 400, { message: "The query was malformed!" }));
}
exports.updateProduct = updateProduct;
function deleteProduct(req, res) {
    const { id } = req.params;
    // locate the product to be deleted.
    if (data_1.products.filter((product) => product.id === Number(id)).length === 1) {
        const returnedProduct = data_1.products.splice(Number(id) - 1, 1);
        return res.status(200).json(new response_data_model_1.ResponseData(true, 200, returnedProduct));
    }
    else {
        return res.status(404).json(new response_data_model_1.ResponseData(false, 404, {
            message: "The specified id was not found!",
        }));
    }
}
exports.deleteProduct = deleteProduct;
