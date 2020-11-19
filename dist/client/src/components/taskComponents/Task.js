"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const taskActions_1 = require("../../actions/taskActions");
const DeleteIcon_1 = __importDefault(require("../../elements/DeleteIcon"));
const FlexBox_1 = __importDefault(require("../../elements/FlexBox"));
const Icon_1 = __importDefault(require("../../elements/Icon"));
const Input_1 = __importDefault(require("../../elements/Input"));
const PrimaryButton_1 = __importDefault(require("../../elements/PrimaryButton"));
const CheckBox_1 = __importDefault(require("../../elements/taskElements/CheckBox"));
const TaskDiv_1 = __importDefault(require("../../elements/taskElements/TaskDiv"));
const TaskEditModeTrue_1 = __importDefault(require("../../elements/taskElements/TaskEditModeTrue"));
const theme_1 = __importDefault(require("../../theme"));
const TaskDeleteModal_1 = __importDefault(require("./TaskDeleteModal"));
const CHECKBOX_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems.center
};
const TEXT_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.flexStart,
    alignItems: theme_1.default.alignItems.center
};
const ACTION_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems.center
};
const CANCEL_BUTTON_THEME = {
    color: theme_1.default.colors.navy,
    backgroundColor: theme_1.default.colors.white,
    hoverColor: theme_1.default.colors.navy,
    hoverBackgroundColor: theme_1.default.colors.white,
    hoverBoxShadow: '0 0 3px navy',
    borderRadius: '1em',
    marginRight: '1em',
};
const SUBMIT_BUTTON_THEME = {
    color: theme_1.default.colors.white,
    backgroundColor: theme_1.default.colors.navy,
    hoverColor: theme_1.default.colors.navy,
    hoverBackgroundColor: theme_1.default.colors.white,
    hoverBoxShadow: '0 0 3px navy',
    borderRadius: '1em',
    marginRight: '1em',
};
const TaskElement = (props) => {
    const [editMode, setEditMode] = react_1.default.useState(false);
    const [taskSubject, setTaskSubject] = react_1.default.useState(props.task.subject);
    const [confirmDeleteModal, setConfirmDeleteModal] = react_1.default.useState(false);
    if (editMode) {
        return (react_1.default.createElement(TaskEditModeTrue_1.default, null,
            react_1.default.createElement(FlexBox_1.default, null,
                react_1.default.createElement(Input_1.default, { value: taskSubject, onChange: (e) => setTaskSubject(e.target.value) })),
            react_1.default.createElement(PrimaryButton_1.default, { theme: CANCEL_BUTTON_THEME, onClick: () => setEditMode(false) }, "Cancel"),
            react_1.default.createElement(PrimaryButton_1.default, { theme: SUBMIT_BUTTON_THEME, onClick: () => { props.saveTask(props.task._id, taskSubject); setEditMode(false); } }, "Save")));
    }
    else {
        return (react_1.default.createElement("div", null,
            confirmDeleteModal ? react_1.default.createElement(TaskDeleteModal_1.default, { closeModal: setConfirmDeleteModal, action: props.deleteTask, object: props.task }) : null,
            react_1.default.createElement(TaskDiv_1.default, { style: { backgroundColor: props.task.isDone ? 'lightgreen' : 'white' } },
                react_1.default.createElement(FlexBox_1.default, { theme: CHECKBOX_FLEXBOX_THEME },
                    react_1.default.createElement(CheckBox_1.default, { type: "checkbox", defaultChecked: props.task.isDone ? true : false, onChange: (e) => { e.target.checked ? props.finishTask(props.task._id, props.task.notebook) : props.openTask(props.task._id, props.task.notebook); } })),
                react_1.default.createElement(FlexBox_1.default, { theme: TEXT_FLEXBOX_THEME },
                    props.number + 1,
                    ".",
                    props.task.subject),
                react_1.default.createElement(FlexBox_1.default, { theme: ACTION_FLEXBOX_THEME },
                    react_1.default.createElement(Icon_1.default, { onClick: () => setEditMode(true) },
                        react_1.default.createElement("i", { className: "fas fa-pen" }))),
                react_1.default.createElement(FlexBox_1.default, { theme: ACTION_FLEXBOX_THEME },
                    react_1.default.createElement(DeleteIcon_1.default, { onClick: () => setConfirmDeleteModal(true) },
                        react_1.default.createElement("i", { className: "fas fa-trash-alt" }))))));
    }
};
const mapDispatchToProps = (dispatch) => ({
    finishTask: (taskId, notebookId) => dispatch(taskActions_1.finishTaskRequest(taskId, notebookId)),
    openTask: (taskId, notebookId) => dispatch(taskActions_1.openTaskRequest(taskId, notebookId)),
    deleteTask: (task) => dispatch(taskActions_1.deleteTaskRequest(task)),
    saveTask: (taskId, taskSubject) => dispatch(taskActions_1.openTaskRequest(taskId, taskSubject)),
});
exports.default = react_redux_1.connect(null, mapDispatchToProps)(TaskElement);
//# sourceMappingURL=Task.js.map