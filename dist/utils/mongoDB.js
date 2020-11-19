"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mongoose = require('mongoose');
const keys = require('../config/keys');
module.exports = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
        console.log('Mongo DB has been successfully connected');
        return client;
    }
    catch (e) {
        console.log(e);
    }
});
//# sourceMappingURL=mongoDB.js.map