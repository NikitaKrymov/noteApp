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
const react_1 = __importStar(require("react"));
const history_1 = __importDefault(require("../../history"));
const react_redux_1 = require("react-redux");
const theme_1 = __importDefault(require("../../theme"));
const GridBox_1 = __importDefault(require("../../elements/GridBox"));
const NotebookEditModal_1 = __importDefault(require("./NotebookEditModal"));
const FlexBox_1 = __importDefault(require("../../elements/FlexBox"));
const NotebookDiv_1 = __importDefault(require("../../elements/notebookElements/NotebookDiv"));
const Icon_1 = __importDefault(require("../../elements/Icon"));
const TaskList_1 = __importDefault(require("../taskComponents/TaskList"));
const notebookActions_1 = require("../../actions/notebookActions");
const DeleteIcon_1 = __importDefault(require("../../elements/DeleteIcon"));
const NotebookDeleteModal_1 = __importDefault(require("../notebookComponents/NotebookDeleteModal"));
const GRIDBOX_THEME = {
    gridTemplateRows: '1fr 20fr',
};
const NOTEBOOK_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems.flexStart
};
const TOP_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.sb
};
const TOP_FLEXBOX_STYLE = {
    borderBottom: '1px solid navy',
    width: '100%',
    marginTop: '1em',
    paddingBottom: '1em',
    fontSize: '1.5em'
};
const TASKLIST_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.flexStart,
    flexDirection: theme_1.default.flexDirection.column
};
const TOP_RIGHT_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.flexEnd,
    alignItems: theme_1.default.alignItems.flexStart,
    marginRight: '1em'
};
const TOP_LEFT_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.flexStart,
    alignItems: theme_1.default.alignItems.flexStart,
    marginTop: '1em',
};
const TITLE_GRIDBOX_THEME = {
    gridTemplateRows: '1fr 1fr'
};
const UPPER_TITLE_FLEXBOX_THEME = {
    justifyContent: 'center',
    alignItems: 'center'
};
const LOWER_TITLE_FLEXBOX_THEME = {
    justifyContent: 'center',
    alignItems: 'flex-end'
};
const NotebookComponent = (props) => {
    const [editMode, setEditMode] = react_1.default.useState(false);
    const [deleteModal, setDeleteModal] = react_1.default.useState(false);
    react_1.useEffect(() => {
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
                        react_1.default.createElement(FlexBox_1.default, { onClick: () => history_1.default.push('/'), theme: TOP_LEFT_FLEXBOX_THEME, style: { cursor: 'pointer' } },
                            react_1.default.createElement(Icon_1.default, null,
                                react_1.default.createElement("i", { style: { fontSize: '1em', marginLeft: '1em' }, className: "fas fa-arrow-left" }))),
                        react_1.default.createElement(GridBox_1.default, { theme: TITLE_GRIDBOX_THEME, style: { margin: '0 1em 0 1em' } },
                            react_1.default.createElement(FlexBox_1.default, { theme: UPPER_TITLE_FLEXBOX_THEME },
                                react_1.default.createElement("div", null, props.notebookData.title),
                                react_1.default.createElement(Icon_1.default, { onClick: () => setEditMode(true) },
                                    react_1.default.createElement("i", { className: "fas fa-pen" }))),
                            react_1.default.createElement(FlexBox_1.default, { theme: LOWER_TITLE_FLEXBOX_THEME, style: { fontSize: '0.8em' } }, props.notebookData.description)),
                        react_1.default.createElement(FlexBox_1.default, { style: TOP_RIGHT_FLEXBOX_THEME, onClick: (e) => { setDeleteModal(true); } },
                            react_1.default.createElement(DeleteIcon_1.default, null,
                                react_1.default.createElement("i", { className: "fas fa-trash-alt" })))),
                    react_1.default.createElement(FlexBox_1.default, { theme: TASKLIST_FLEXBOX_THEME, style: { height: '95%', position: 'relative', overflow: 'auto', borderRadius: '1em', marginTop: '1em' } },
                        react_1.default.createElement("div", null,
                            react_1.default.createElement(TaskList_1.default, { notebookId: props.notebookData._id })))))));
    }
};
const mapDispatchToProps = (dispatch) => ({
    deleteNotebook: (notebook) => dispatch(notebookActions_1.deleteNotebookRequest(notebook)),
    editNotebook: (notebookId, notebookData) => dispatch(notebookActions_1.editNotebookRequest(notebookId, notebookData)),
    fetchNotebook: (notebookId) => dispatch(notebookActions_1.fetchNotebookRequest(notebookId))
});
const mapStateToProps = (state, ownProps) => ({
    notebookData: state.app.userNotebooks[ownProps.match.params.id],
    isNotebookLoading: state.app.isNotebookLoading
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(NotebookComponent);
//# sourceMappingURL=Notebook.js.map