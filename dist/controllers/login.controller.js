"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const response_data_model_1 = require("../models/response-data.model");
function login(req, res) {
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
}
exports.login = login;
