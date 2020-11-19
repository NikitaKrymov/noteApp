"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var UserSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        default: null
    }
});
var User = mongoose_1.default.model('Users', UserSchema);
module.exports = User;
//# sourceMappingURL=User.js.map