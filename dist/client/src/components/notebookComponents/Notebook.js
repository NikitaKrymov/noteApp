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
var history_1 = __importDefault(require("../../history"));
var react_redux_1 = require("react-redux");
var theme_1 = __importDefault(require("../../theme"));
var GridBox_1 = __importDefault(require("../../elements/GridBox"));
var NotebookEditModal_1 = __importDefault(require("./NotebookEditModal"));
var FlexBox_1 = __importDefault(require("../../elements/FlexBox"));
var NotebookDiv_1 = __importDefault(require("../../elements/notebookElements/NotebookDiv"));
var Icon_1 = __importDefault(require("../../elements/Icon"));
var TaskList_1 = __importDefault(require("../taskComponents/TaskList"));
var notebookActions_1 = require("../../actions/notebookActions");
var DeleteIcon_1 = __importDefault(require("../../elements/DeleteIcon"));
var NotebookDeleteModal_1 = __importDefault(require("../notebookComponents/NotebookDeleteModal"));
var GRIDBOX_THEME = {
    gridTemplateRows: '1fr 20fr',
};
var NOTEBOOK_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems.flexStart
};
var TOP_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.sb
};
var TOP_FLEXBOX_STYLE = {
    borderBottom: '1px solid navy',
    width: '100%',
    marginTop: '1em',
    paddingBottom: '1em',
    fontSize: '1.5em'
};
var TASKLIST_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.flexStart,
    flexDirection: theme_1.default.flexDirection.column
};
var TOP_RIGHT_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.flexEnd,
    alignItems: theme_1.default.alignItems.flexStart,
    marginRight: '1em'
};
var TOP_LEFT_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.flexStart,
    alignItems: theme_1.default.alignItems.flexStart,
    marginTop: '1em',
};
var TITLE_GRIDBOX_THEME = {
    gridTemplateRows: '1fr 1fr'
};
var UPPER_TITLE_FLEXBOX_THEME = {
    justifyContent: 'center',
    alignItems: 'center'
};
var LOWER_TITLE_FLEXBOX_THEME = {
    justifyContent: 'center',
    alignItems: 'flex-end'
};
var NotebookComponent = function (props) {
    var _a = react_1.default.useState(false), editMode = _a[0], setEditMode = _a[1];
    var _b = react_1.default.useState(false), deleteModal = _b[0], setDeleteModal = _b[1];
    react_1.useEffect(function () {
        props.fetchNotebook(props.match.params.id);
    }, [props.match.params.id]);
    console.log(props);
    if (props.isNotebookLoading) {
        return (react_1.default.createElement("div", null, "Loading"));
    }
    else {
        console.log(props.notebookData);
        return (react_1.default.createElement(GridBox_1.default, { theme: GRIDBOX_THEME },
            deleteModal ? react_1.default.createElement(NotebookDeleteModal_1.default, { closeModal: setDeleteModal, action: props.deleteNotebook, object: props.notebookData }) : null,
            editMode ? react_1.default.createElement(NotebookEditModal_1.default, { modalMame: 'Edit Notebook', closeModal: setEditMode, notebookId: props.notebookData._id, title: props.notebookData.title, userId: props.notebookData.owner, description: props.notebookData.description, saveNotebook: props.editNotebook }) : null,
            react_1.default.createElement(FlexBox_1.default, { theme: NOTEBOOK_FLEXBOX_THEME },
                react_1.default.createElement(NotebookDiv_1.default, null,
                    react_1.default.createElement(FlexBox_1.default, { theme: TOP_FLEXBOX_THEME, style: TOP_FLEXBOX_STYLE },
                        react_1.default.createElement(FlexBox_1.default, { onClick: function () { return history_1.default.push('/'); }, theme: TOP_LEFT_FLEXBOX_THEME, style: { cursor: 'pointer' } },
                            react_1.default.createElement(Icon_1.default, null,
                                react_1.default.createElement("i", { style: { fontSize: '1em', marginLeft: '1em' }, className: "fas fa-arrow-left" }))),
                        react_1.default.createElement(GridBox_1.default, { theme: TITLE_GRIDBOX_THEME, style: { margin: '0 1em 0 1em' } },
                            react_1.default.createElement(FlexBox_1.default, { theme: UPPER_TITLE_FLEXBOX_THEME },
                                react_1.default.createElement("div", null, props.notebookData.title),
                                react_1.default.createElement(Icon_1.default, { onClick: function () { return setEditMode(true); } },
                                    react_1.default.createElement("i", { className: "fas fa-pen" }))),
                            react_1.default.createElement(FlexBox_1.default, { theme: LOWER_TITLE_FLEXBOX_THEME, style: { fontSize: '0.8em' } }, props.notebookData.description)),
                        react_1.default.createElement(FlexBox_1.default, { style: TOP_RIGHT_FLEXBOX_THEME, onClick: function (e) { setDeleteModal(true); } },
                            react_1.default.createElement(DeleteIcon_1.default, null,
                                react_1.default.createElement("i", { className: "fas fa-trash-alt" })))),
                    react_1.default.createElement(FlexBox_1.default, { theme: TASKLIST_FLEXBOX_THEME, style: { height: '95%', position: 'relative', overflow: 'auto', borderRadius: '1em', marginTop: '1em' } },
                        react_1.default.createElement("div", null,
                            react_1.default.createElement(TaskList_1.default, { notebookId: props.notebookData._id })))))));
    }
};
var mapDispatchToProps = function (dispatch) { return ({
    deleteNotebook: function (notebook) { return dispatch(notebookActions_1.deleteNotebookRequest(notebook)); },
    editNotebook: function (notebookId, notebookData) { return dispatch(notebookActions_1.editNotebookRequest(notebookId, notebookData)); },
    fetchNotebook: function (notebookId) { return dispatch(notebookActions_1.fetchNotebookRequest(notebookId)); }
}); };
var mapStateToProps = function (state, ownProps) { return ({
    notebookData: state.app.userNotebooks[ownProps.match.params.id],
    isNotebookLoading: state.app.isNotebookLoading
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(NotebookComponent);
//# sourceMappingURL=Notebook.js.map