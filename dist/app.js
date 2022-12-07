"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = require("./routes/product");
const login_1 = require("./routes/login");
const app = (0, express_1.default)();
// static assets
app.use(express_1.default.static("./public"));
// add json parsing
app.use(express_1.default.json());
// add routers
app.use("/api/v1/product", product_1.router);
app.use("/api/v1/login", login_1.router);
app.listen(3000, () => {
    console.log("app is listening on port 3000");
});
