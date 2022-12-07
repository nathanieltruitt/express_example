"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
exports.router.use("/people", (req, res) => {
    res.json([
        {
            name: "Nathan Truitt",
            age: 22,
        },
        {
            name: "Bill Gates",
            age: 1000,
        },
    ]);
});
