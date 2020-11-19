"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TaskSchema = new mongoose_1.default.Schema({
    subject: {
        type: String
    },
    isDone: {
        type: Boolean,
        default: false
    },
    notebook: {
        type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Notebook',
        required: true
    },
    index: {
        type: Number,
        required: true
    }
});
const Task = mongoose_1.default.model('tasks', TaskSchema);
module.exports = Task;
//# sourceMappingURL=Task.js.map