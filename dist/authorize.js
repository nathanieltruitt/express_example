"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const response_data_model_1 = require("./models/response-data.model");
function authorize(req, res, next) {
    const { user } = req.query;
    if (user !== "nathan") {
        return res.send(new response_data_model_1.ResponseData(false, 401, { message: "Unauthorized" }));
    }
    console.log("authorize");
    next();
}
exports.authorize = authorize;
