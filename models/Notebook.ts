import mongoose from 'mongoose';

const NotebookSchema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    }
});

const Notebook = mongoose.model('notebooks', NotebookSchema);

module.exports = Notebook;