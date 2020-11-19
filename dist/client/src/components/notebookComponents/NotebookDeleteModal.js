"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FlexBox_1 = __importDefault(require("../../elements/FlexBox"));
const ModalDiv_1 = __importDefault(require("../../elements/ModalDiv"));
const PrimaryButton_1 = __importDefault(require("../../elements/PrimaryButton"));
const theme_1 = __importDefault(require("../../theme"));
const TOP_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems.center,
    fontSize: '1.4em'
};
const BOTTOM_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems,
    flexDirection: theme_1.default.flexDirection.row
};
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
    color: theme_1.default.colors.black,
    backgroundColor: 'red',
    hoverColor: 'red',
    hoverBackgroundColor: theme_1.default.colors.white,
    hoverBoxShadow: '0 0 3px red',
    borderRadius: '1em',
    marginTop: '1em',
    marginLeft: '1em',
    marginBottom: '1em',
};
const Modal = (props) => {
    console.log(props.object);
    return (react_1.default.createElement(ModalDiv_1.default, { style: { top: '20em', height: '10em', gridTemplateRows: '1fr 1fr' } },
        react_1.default.createElement(FlexBox_1.default, { theme: TOP_FLEXBOX_THEME }, "Are you sure you want to delete this notebook?"),
        react_1.default.createElement(FlexBox_1.default, { theme: BOTTOM_FLEXBOX_THEME },
            react_1.default.createElement(PrimaryButton_1.default, { theme: CANCEL_BUTTON_THEME, onClick: () => props.closeModal(false) }, "Cancel"),
            react_1.default.createElement(PrimaryButton_1.default, { theme: SUBMIT_BUTTON_THEME, onClick: () => { props.action(props.object); props.closeModal(false); } }, "Delete"))));
};
exports.default = Modal;
//# sourceMappingURL=NotebookDeleteModal.js.map