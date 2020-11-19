import {  } from "module";

const Task = require('../../models/Task');
const authorizeUser = require('../../middleware/authorizeUser');


module.exports = (app: any) => {
    app.get('/api/webPlanner/fetchTasks/:notebookId', authorizeUser, async (req: any, res: any) => {
        const { notebookId } = req.params;
        try {
            const taskList = await Task.find({ notebook: notebookId });
            res.send({
                status: 1100,
                payload: taskList
            });
        } catch (e) {
            res.send({
                errorCode: 1099,
                message: "Failed to fetch tasks" 
            })
        }
    });

    app.post('/api/webPlanner/createTask', authorizeUser, async(req: any, res: any) => {
        const { task: { subject, notebookId }} = req.body;

        try {
            const taskList = await Task.find({ notebook: notebookId });

            const newTask = new Task({
                subject,
                notebook: notebookId,
                index: taskList.length
            });
            await newTask.save();
            res.send({
                status: 1500,
                message: "New task has been created"
            })
        } catch (e){
            res.send({
                errorCode: 1201,
                message: "Failed to create a task"
            })
        }
    });

    app.post('/api/webPlanner/finishTask', authorizeUser, async (req: any, res: any) => {
        const { taskId } = req.body;
        try {
            const task = await Task.findOne({ _id: taskId });
            task.isDone = true;
            task.save();
            res.send({
                status: 2000
            });
        } catch (e) {
            res.send({
                error: 500,
                message: 'Failed to finish task'
            });
        }
    });

    app.post('/api/webPlanner/openTask', authorizeUser, async (req: any, res: any) => {
        const { taskId } = req.body;
        try {
            const task = await Task.findOne({ _id: taskId });
            task.isDone = false;
            task.save();
            res.send({
                status: 2100
            });
        } catch (e) {
            res.send({
                error: 505,
                message: 'Failed to reopen a task'
            });
        }
    });

    app.post('/api/webPlanner/saveTask', authorizeUser, async (req: any, res: any) => {
        const { editedTask: { taskId, taskSubject } } = req.body;
        try {
            const existingTask = await Task.findOne({ _id: taskId });
            existingTask.subject = taskSubject;
            existingTask.isDone = false;
            await existingTask.save();
            res.send({
                status: 1000,
                notebookId: existingTask.notebook
            })
        } catch (error) {
            res.send({ 
                code: 880,
                errorMessage: 'Unable to save task'
            });
        }
    });

    app.post('/api/webPlanner/deleteTask', authorizeUser, async (req: any, res: any) => {
        const { taskId } = req.body;

        try {
            await Task.deleteOne({ _id: taskId });
            res.send({
                status: 1000
            });
        } catch(e) {
            res.send({
                code: 850,
                errorMessage: 'Delete task has failed'
            });
        }

    })
}