"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
// setup router
exports.router = express_1.default.Router();
exports.router.route("/").get(product_controller_1.getProduct);
exports.router.route("/add").post(product_controller_1.addProduct);
exports.router.route("/:id").put(product_controller_1.updateProduct);
exports.router.route("/:id").delete(product_controller_1.deleteProduct);
