"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const response_data_model_1 = require("../models/response-data.model");
exports.router = express_1.default.Router();
exports.router.post("/", (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        return res
            .status(200)
            .json(new response_data_model_1.ResponseData(true, 200, { message: "you successfully logged in!" }));
    }
    else {
        return res
            .status(400)
            .json(new response_data_model_1.ResponseData(false, 400, { message: "malformed query!" }));
    }
});
