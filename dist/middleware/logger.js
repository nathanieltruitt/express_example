"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
function logger(req, res, next) {
    // header info and information on who is making this request
    console.log(new Date().toString(), req.method, req.url);
    next();
}
exports.logger = logger;
