"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var taskActions_1 = require("../../actions/taskActions");
var DeleteIcon_1 = __importDefault(require("../../elements/DeleteIcon"));
var FlexBox_1 = __importDefault(require("../../elements/FlexBox"));
var GridBox_1 = __importDefault(require("../../elements/GridBox"));
var Icon_1 = __importDefault(require("../../elements/Icon"));
var PrimaryButton_1 = __importDefault(require("../../elements/PrimaryButton"));
var CheckBox_1 = __importDefault(require("../../elements/taskElements/CheckBox"));
var TaskDiv_1 = __importDefault(require("../../elements/taskElements/TaskDiv"));
var TaskEditModeTrue_1 = __importDefault(require("../../elements/taskElements/TaskEditModeTrue"));
var Text_1 = __importDefault(require("../../elements/taskElements/Text"));
var TextArea_1 = __importDefault(require("../../elements/TextArea"));
var theme_1 = __importDefault(require("../../theme"));
var TaskDeleteModal_1 = __importDefault(require("./TaskDeleteModal"));
var CHECKBOX_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems.center
};
var TEXT_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.flexStart,
    alignItems: theme_1.default.alignItems.center
};
var ACTION_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems.center
};
var CANCEL_BUTTON_THEME = {
    color: theme_1.default.colors.navy,
    backgroundColor: theme_1.default.colors.white,
    hoverColor: theme_1.default.colors.navy,
    hoverBackgroundColor: theme_1.default.colors.white,
    hoverBoxShadow: '0 0 3px navy',
    borderRadius: '1em',
    marginRight: '1em',
};
var SUBMIT_BUTTON_THEME = {
    color: theme_1.default.colors.white,
    backgroundColor: theme_1.default.colors.navy,
    hoverColor: theme_1.default.colors.navy,
    hoverBackgroundColor: theme_1.default.colors.white,
    hoverBoxShadow: '0 0 3px navy',
    borderRadius: '1em',
    marginRight: '1em',
};
var TaskElement = function (props) {
    var _a = react_1.default.useState(false), editMode = _a[0], setEditMode = _a[1];
    var _b = react_1.default.useState(props.task.subject), taskSubject = _b[0], setTaskSubject = _b[1];
    var _c = react_1.default.useState(false), confirmDeleteModal = _c[0], setConfirmDeleteModal = _c[1];
    if (editMode) {
        return (react_1.default.createElement(TaskEditModeTrue_1.default, null,
            react_1.default.createElement(GridBox_1.default, { style: {
                    display: 'grid',
                    gridTemplateColumns: '20fr 1fr 1fr',
                    position: 'relative'
                } },
                react_1.default.createElement(TextArea_1.default, { value: taskSubject, onChange: function (e) { return setTaskSubject(e.target.value); } }),
                react_1.default.createElement(PrimaryButton_1.default, { theme: CANCEL_BUTTON_THEME, onClick: function () { return setEditMode(false); } }, "Cancel"),
                react_1.default.createElement(PrimaryButton_1.default, { theme: SUBMIT_BUTTON_THEME, onClick: function () { props.saveTask(props.task._id, taskSubject); setEditMode(false); } }, "Save"))));
    }
    else {
        return (react_1.default.createElement("div", { style: { position: 'relative' } },
            confirmDeleteModal ? react_1.default.createElement(TaskDeleteModal_1.default, { closeModal: setConfirmDeleteModal, action: props.deleteTask, object: props.task }) : null,
            react_1.default.createElement(TaskDiv_1.default, { style: { backgroundColor: props.task.isDone ? 'lightgreen' : 'white' } },
                react_1.default.createElement(GridBox_1.default, { style: { position: 'relative', gridTemplateColumns: '1fr 1fr 19fr 1fr 1fr' } },
                    react_1.default.createElement(FlexBox_1.default, { theme: CHECKBOX_FLEXBOX_THEME },
                        react_1.default.createElement(CheckBox_1.default, { type: "checkbox", defaultChecked: props.task.isDone ? true : false, onChange: function (e) { e.target.checked ? props.finishTask(props.task._id, props.task.notebook) : props.openTask(props.task._id, props.task.notebook); } })),
                    react_1.default.createElement(FlexBox_1.default, { theme: TEXT_FLEXBOX_THEME },
                        props.number + 1,
                        "."),
                    react_1.default.createElement(Text_1.default, null, props.task.subject),
                    react_1.default.createElement(FlexBox_1.default, { theme: ACTION_FLEXBOX_THEME },
                        react_1.default.createElement(Icon_1.default, { onClick: function () { return setEditMode(true); } },
                            react_1.default.createElement("i", { className: "fas fa-pen" }))),
                    react_1.default.createElement(FlexBox_1.default, { theme: ACTION_FLEXBOX_THEME },
                        react_1.default.createElement(DeleteIcon_1.default, { onClick: function () { return setConfirmDeleteModal(true); } },
                            react_1.default.createElement("i", { className: "fas fa-trash-alt" })))))));
    }
};
var mapDispatchToProps = function (dispatch) { return ({
    finishTask: function (taskId, notebookId) { return dispatch(taskActions_1.finishTaskRequest(taskId, notebookId)); },
    openTask: function (taskId, notebookId) { return dispatch(taskActions_1.openTaskRequest(taskId, notebookId)); },
    deleteTask: function (task) { return dispatch(taskActions_1.deleteTaskRequest(task)); },
    saveTask: function (taskId, taskSubject) { return dispatch(taskActions_1.openTaskRequest(taskId, taskSubject)); },
}); };
exports.default = react_redux_1.connect(null, mapDispatchToProps)(TaskElement);
//# sourceMappingURL=Task.js.map