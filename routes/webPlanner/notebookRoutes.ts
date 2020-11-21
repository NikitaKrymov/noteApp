import { response } from 'express';
import {  } from 'module';
const Notebook = require('../../models/Notebook');
const authorizeUser = require('../../middleware/authorizeUser');

module.exports = (app: any) => {
    app.post('/api/webPlanner/createNotebook', authorizeUser, async (req: any, res: any) => {
        console.log(req.body)
        const { newNotebook: { title, description, owner } } = req.body;
        try {
            const newNotebook = new Notebook({
                title: title, 
                description: description,
                owner: owner
            });
            await newNotebook.save();
            res.send({
                code: 910,
                message: 'Notebook has been saved'
            });
        } catch (e) {
            console.log(e)
            res.send({
                code: 905,
                message: e
            })
        }
    });

    app.get('/api/webPlanner/fetchNotebooks', authorizeUser, async (req: any, res: any) => {
        const { userId } = req.query;
        try {
            const notebookList = await Notebook.find({ owner: userId });
            res.send({
                status: 1000,
                notebookList: notebookList
            });
        } catch (e) {
            res.send({
                status: 999,
                message: 'Unable to fetch notebooks'
            });
        }
    });

    app.get('/api/webPlanner/fetchNotebook', authorizeUser, async(req: any, res: any) => {
        const{ notebookId } = req.query;

        try {
            const notebookData = await Notebook.findOne({ _id: notebookId});
            res.send({
                status: 1000,
                notebookData: notebookData
            });
        } catch (error) {
            res.send({
                code: 700,
                message: 'Unable to fetch notebook data'
            })
        }
    });

    app.post('/api/webPlanner/deleteNotebook', authorizeUser, async(req: any, res: any) => {
        console.log(req.body);
        const { notebookId } = req.body;
        try {
            await Notebook.deleteOne({ _id: notebookId._id });
            res.send({
                status: 1000,
                userId: notebookId.owner
            })
        } catch (e) {
            res.send({
                code: 701,
                message: 'Unable to delete Notebook'
            })
        }
    });

    app.post('/api/webPlanner/editNotebook', authorizeUser, async(req: any, res: any) => {
        console.log(req.body);
        const { newTitle, newDescription, notebookId} = req.body;
        console.log(notebookId);
        try {
            const existingNotebook = await Notebook.findOne({ _id: notebookId });
            existingNotebook.title = newTitle,
            existingNotebook.description = newDescription;
            await existingNotebook.save();
            res.send({
                status: 1000
            })
        } catch {
            res.send({
                code: 609,
                message: 'Unable to save notebook data'
            })
        }
    });
}