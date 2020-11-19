"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var taskActions_1 = require("../../actions/taskActions");
var FlexBox_1 = __importDefault(require("../../elements/FlexBox"));
var GridBox_1 = __importDefault(require("../../elements/GridBox"));
var ProgressBar_1 = __importDefault(require("../../elements/notebookElements/ProgressBar"));
var NewTaskButton_1 = __importDefault(require("../../elements/taskElements/NewTaskButton"));
var Task_1 = __importDefault(require("./Task"));
var TaskCreateModal_1 = __importDefault(require("./TaskCreateModal"));
var PROGRESS_BAR_ITEM = {
    justifyContent: 'space-around',
    alignItems: 'center',
};
var progressBarLoading = function (totalSections, doneSections) {
    console.log(totalSections, doneSections);
    var doneWidth = (100 / totalSections) * doneSections;
    console.log(doneWidth);
    return ({
        backgroundColor: 'green',
        width: doneWidth + "%"
    });
};
var countDoneTasks = function (taskArray, setTotalDoneTasks) {
    var count = 0;
    taskArray.map(function (task, i) {
        return task.isDone ? count++ : count;
    });
    setTotalDoneTasks(count);
};
var TaskList = function (props) {
    var _a = react_1.useState(false), taskForm = _a[0], setTaskForm = _a[1];
    var _b = react_1.useState(0), totalDoneTasks = _b[0], setTotalDoneTasks = _b[1];
    console.log(props);
    react_1.useEffect(function () {
        console.log(totalDoneTasks);
        props.fetchTasks(props.notebookId);
    }, []);
    react_1.useEffect(function () {
        countDoneTasks(props.notebookTasks, setTotalDoneTasks);
    }, [props.notebookTasks]);
    if (props.isTaskLoading) {
        return (react_1.default.createElement("div", null, "Loading Data"));
    }
    else {
        return (react_1.default.createElement("div", null,
            taskForm ? react_1.default.createElement(TaskCreateModal_1.default, { closeCreateTask: function () { return setTaskForm(false); }, createTask: props.createTask, notebookId: props.notebookId }) : null,
            react_1.default.createElement(GridBox_1.default, { style: { gridTemplateColumns: '1fr 20fr 2fr', marginTop: '0.5em' } },
                react_1.default.createElement(FlexBox_1.default, { theme: PROGRESS_BAR_ITEM },
                    react_1.default.createElement("i", { style: { fontSize: '1.5em', borderRadius: '50%', color: props.notebookTasks.length === totalDoneTasks ? 'white' : 'black', border: props.notebookTasks.length === totalDoneTasks ? '1px solid green' : '0px solid black', backgroundColor: props.notebookTasks.length === totalDoneTasks ? 'green' : 'white' }, className: "far fa-check-circle" })),
                react_1.default.createElement(FlexBox_1.default, { theme: PROGRESS_BAR_ITEM },
                    react_1.default.createElement(ProgressBar_1.default, { style: progressBarLoading(props.notebookTasks.length, totalDoneTasks) })),
                react_1.default.createElement(FlexBox_1.default, { theme: PROGRESS_BAR_ITEM },
                    react_1.default.createElement(NewTaskButton_1.default, { onClick: function () { return setTaskForm(true); } },
                        react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center' } }, "+")))),
            props.notebookTasks.map(function (task, i) {
                return (react_1.default.createElement("div", { key: task._id },
                    react_1.default.createElement(Task_1.default, { task: task, number: i })));
            })));
    }
};
var mapStateToProps = function (state) { return ({
    notebookTasks: Object.values(state.app.notebookTasks),
    isTaskLoading: state.app.isTaskLoading
}); };
var mapDispatchToProps = function (dispatch) { return ({
    createTask: function (newTask) { return dispatch(taskActions_1.createTaskRequest(newTask)); },
    fetchTasks: function (notebookId) { return dispatch(taskActions_1.fetchTasksRequest(notebookId)); },
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(TaskList);
//# sourceMappingURL=TaskList.js.map