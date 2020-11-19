"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
var redux_1 = require("redux");
var appReducer_1 = __importDefault(require("./appReducer"));
var errorReducer_1 = __importDefault(require("./errorReducer"));
exports.rootReducer = redux_1.combineReducers({
    app: appReducer_1.default,
    errors: errorReducer_1.default
});
//# sourceMappingURL=rootReducer.js.map