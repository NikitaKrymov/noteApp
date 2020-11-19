"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var NotebookSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    closeStatus: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User',
        required: true
    }
});
var Notebook = mongoose_1.default.model('notebooks', NotebookSchema);
module.exports = Notebook;
//# sourceMappingURL=Notebook.js.map