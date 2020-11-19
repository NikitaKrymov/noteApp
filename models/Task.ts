import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    subject: {
        type: String
    },
    isDone: {
        type: Boolean,
        default: false
    },
    notebook: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Notebook',
        required: true
    },
    index: {
        type: Number,
        required: true
    }
});

const Task = mongoose.model('tasks', TaskSchema);

module.exports = Task;