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
Object.defineProperty(exports, "__esModule", { value: true });
const Notebook = require('../../models/Notebook');
const authorizeUser = require('../../middleware/authorizeUser');
module.exports = (app) => {
    app.post('/api/webPlanner/createNotebook', authorizeUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.body);
        const { newNotebook: { title, description, owner } } = req.body;
        try {
            const newNotebook = new Notebook({
                title: title,
                description: description,
                owner: owner
            });
            yield newNotebook.save();
            res.send({
                code: 910,
                message: 'Notebook has been saved'
            });
        }
        catch (e) {
            console.log(e);
            res.send({
                code: 905,
                message: e
            });
        }
    }));
    app.get('/api/webPlanner/fetchNotebooks', authorizeUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { userId } = req.query;
        try {
            const notebookList = yield Notebook.find({ owner: userId });
            res.send({
                status: 1000,
                notebookList: notebookList
            });
        }
        catch (e) {
            res.send({
                status: 999,
                message: 'Unable to fetch notebooks'
            });
        }
    }));
    app.get('/api/fetchNotebook', authorizeUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { notebookId } = req.query;
        try {
            const notebookData = yield Notebook.findOne({ _id: notebookId });
            res.send({
                status: 1000,
                notebookData: notebookData
            });
        }
        catch (error) {
            res.send({
                code: 700,
                message: 'Unable to fetch notebook data'
            });
        }
    }));
    app.post('/api/webPlanner/deleteNotebook', authorizeUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.body);
        const { notebookId } = req.body;
        try {
            yield Notebook.deleteOne({ _id: notebookId._id });
            res.send({
                status: 1000,
                userId: notebookId.owner
            });
        }
        catch (e) {
            res.send({
                code: 701,
                message: 'Unable to delete Notebook'
            });
        }
    }));
};
//# sourceMappingURL=notebookRoutes.js.map