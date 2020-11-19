"use strict";
module.exports = function (app, client) {
    require('./webPlanner/authRoutes')(app, client);
    require('./webPlanner/notebookRoutes')(app);
    require('./webPlanner/tasksRoutes')(app);
};
//# sourceMappingURL=index.js.map