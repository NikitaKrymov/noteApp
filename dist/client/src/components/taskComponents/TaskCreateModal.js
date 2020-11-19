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
const FormInput_1 = __importDefault(require("../../elements/authElements/FormInput"));
const FlexBox_1 = __importDefault(require("../../elements/FlexBox"));
const ModalDiv_1 = __importDefault(require("../../elements/ModalDiv"));
const PrimaryButton_1 = __importDefault(require("../../elements/PrimaryButton"));
const theme_1 = __importDefault(require("../../theme"));
const TOP_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems.center,
};
const MID_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems.center,
    flexDirection: theme_1.default.flexDirection.column
};
const BOTTOM_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems,
    flexDirection: theme_1.default.flexDirection.row
};
const FORM_FIELDS = [
    {
        label: 'Subject',
        id: 1,
        type: 'text'
    },
];
const CANCEL_BUTTON_THEME = {
    color: theme_1.default.colors.navy,
    backgroundColor: theme_1.default.colors.white,
    hoverColor: theme_1.default.colors.navy,
    hoverBackgroundColor: theme_1.default.colors.white,
    hoverBoxShadow: '0 0 3px navy',
    borderRadius: '1em',
    marginTop: '1em',
    marginRight: '1em',
    marginBottom: '1em',
};
const SUBMIT_BUTTON_THEME = {
    color: theme_1.default.colors.white,
    backgroundColor: theme_1.default.colors.navy,
    hoverColor: theme_1.default.colors.navy,
    hoverBackgroundColor: theme_1.default.colors.white,
    hoverBoxShadow: '0 0 3px navy',
    borderRadius: '1em',
    marginTop: '1em',
    marginLeft: '1em',
    marginBottom: '1em',
};
const ERROR_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems.center,
};
const TaskModal = (props) => {
    const [subject, setSubject] = react_1.useState('');
    const [subjectError, setSubjectError] = react_1.useState(false);
    const { notebookId } = props;
    return (react_1.default.createElement(ModalDiv_1.default, { style: { gridTemplateRows: '2fr 2fr 8fr 1fr' } },
        react_1.default.createElement(FlexBox_1.default, { theme: TOP_FLEXBOX_THEME, style: { color: 'navy', fontSize: '1.5em', borderBottom: '1px solid navy' } }, "Add New Task"),
        react_1.default.createElement(FlexBox_1.default, { theme: ERROR_FLEXBOX_THEME, style: { opacity: subjectError ? '1' : '0', color: 'red', border: '1px solid red', margin: '1em', padding: '1em' } }, "Subject field can not be empty!"),
        react_1.default.createElement(FlexBox_1.default, { theme: MID_FLEXBOX_THEME },
            react_1.default.createElement(FormInput_1.default, { type: FORM_FIELDS[0].type, placeholder: FORM_FIELDS[0].label, value: subject, onChange: (e) => setSubject(e.target.value), style: {
                    height: '100%',
                    border: '1px solid navy',
                    borderRadius: '1em'
                } })),
        react_1.default.createElement(FlexBox_1.default, { theme: BOTTOM_FLEXBOX_THEME },
            react_1.default.createElement(PrimaryButton_1.default, { theme: CANCEL_BUTTON_THEME, onClick: () => props.closeCreateTask() }, "Cancel"),
            react_1.default.createElement(PrimaryButton_1.default, { theme: SUBMIT_BUTTON_THEME, onClick: () => { subject.length > 0 ? props.createTask({ subject, notebookId: notebookId }) : setSubjectError(true); props.closeCreateTask(); } }, "Add"))));
};
exports.default = TaskModal;
//# sourceMappingURL=TaskCreateModal.js.map