"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureDbConnection = void 0;
const dbConnection = false;
function ensureDbConnection(req, res, next) {
    if (!dbConnection) {
        console.log("no connection to database!");
        res.status(500).send("internal server error 500");
    }
    next();
}
exports.ensureDbConnection = ensureDbConnection;
