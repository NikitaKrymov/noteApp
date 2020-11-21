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
var FlexBox_1 = __importDefault(require("../../elements/FlexBox"));
var ModalDiv_1 = __importDefault(require("../../elements/ModalDiv"));
var PrimaryButton_1 = __importDefault(require("../../elements/PrimaryButton"));
var TextArea_1 = __importDefault(require("../../elements/TextArea"));
var theme_1 = __importDefault(require("../../theme"));
var TOP_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems.center,
};
var MID_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems.center,
    flexDirection: theme_1.default.flexDirection.column
};
var BOTTOM_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems,
    flexDirection: theme_1.default.flexDirection.row
};
var FORM_FIELDS = [
    {
        label: 'Subject',
        id: 1,
        type: 'text'
    },
];
var CANCEL_BUTTON_THEME = {
    color: theme_1.default.colors.navy,
    backgroundColor: theme_1.default.colors.white,
    hoverColor: theme_1.default.colors.navy,
    hoverBackgroundColor: theme_1.default.colors.white,
    hoverBoxShadow: '0 0 5px navy',
    borderRadius: '1em',
    marginTop: '1em',
    marginRight: '1em',
    marginBottom: '1em',
};
var SUBMIT_BUTTON_THEME = {
    color: theme_1.default.colors.white,
    backgroundColor: theme_1.default.colors.navy,
    hoverColor: theme_1.default.colors.navy,
    hoverBackgroundColor: theme_1.default.colors.white,
    hoverBoxShadow: '0 0 5px navy',
    borderRadius: '1em',
    marginTop: '1em',
    marginLeft: '1em',
    marginBottom: '1em',
};
var ERROR_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems.center,
};
var TaskModal = function (props) {
    var _a = react_1.useState(''), subject = _a[0], setSubject = _a[1];
    var _b = react_1.useState(false), subjectError = _b[0], setSubjectError = _b[1];
    var notebookId = props.notebookId;
    return (react_1.default.createElement(ModalDiv_1.default, { style: { gridTemplateRows: '2fr 2fr 8fr 1fr' } },
        react_1.default.createElement(FlexBox_1.default, { theme: TOP_FLEXBOX_THEME, style: { color: 'navy', fontSize: '1.5em', borderBottom: '1px solid navy' } }, "Add New Task"),
        react_1.default.createElement(FlexBox_1.default, { theme: ERROR_FLEXBOX_THEME, style: { opacity: subjectError ? '1' : '0', color: 'red', border: '1px solid red', margin: '1em', padding: '1em' } }, "Subject field can not be empty!"),
        react_1.default.createElement(FlexBox_1.default, { theme: MID_FLEXBOX_THEME },
            react_1.default.createElement(TextArea_1.default, { placeholder: FORM_FIELDS[0].label, value: subject, onChange: function (e) { return setSubject(e.target.value); }, style: {
                    height: '100%',
                    border: '1px solid navy',
                    borderRadius: '1em'
                } })),
        react_1.default.createElement(FlexBox_1.default, { theme: BOTTOM_FLEXBOX_THEME },
            react_1.default.createElement(PrimaryButton_1.default, { theme: CANCEL_BUTTON_THEME, onClick: function () { return props.closeCreateTask(); } }, "Cancel"),
            react_1.default.createElement(PrimaryButton_1.default, { theme: SUBMIT_BUTTON_THEME, onClick: function () { subject.length > 0 ? props.createTask({ subject: subject, notebookId: notebookId }) : setSubjectError(true); props.closeCreateTask(); } }, "Add"))));
};
exports.default = TaskModal;
//# sourceMappingURL=TaskCreateModal.js.map