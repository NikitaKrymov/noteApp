module.exports = (app: any, client: any) => {
    require('./webPlanner/authRoutes')(app, client);
    require('./webPlanner/notebookRoutes')(app);
    require('./webPlanner/tasksRoutes')(app);
}