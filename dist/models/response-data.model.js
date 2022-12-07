"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseData = void 0;
class ResponseData {
    constructor(success, status_code, data) {
        this.success = success;
        this.status_code = status_code;
        this.data = data;
    }
}
exports.ResponseData = ResponseData;
