"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var theme_1 = __importDefault(require("../../theme"));
var history_1 = __importDefault(require("../../history"));
var FlexBox_1 = __importDefault(require("../../elements/FlexBox"));
var PrimaryButton_1 = __importDefault(require("../../elements/PrimaryButton"));
var DashboardElementDiv_1 = __importDefault(require("../../elements/dashboardElements/DashboardElementDiv"));
var TOP_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems.center
};
var MID_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems.center,
    margin: '1em'
};
var BOTTOM_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems.center,
};
var BUTTON_THEME = {
    color: theme_1.default.colors.white,
    backgroundColor: theme_1.default.colors.navy,
    hoverColor: theme_1.default.colors.navy,
    hoverBackgroundColor: theme_1.default.colors.white,
    hoverBoxShadow: '0 0 3px navy',
    borderRadius: '1em'
};
var NotebookComponent = function (props) {
    return (react_1.default.createElement(DashboardElementDiv_1.default, { onClick: function () { return history_1.default.push("/" + props.notebook._id); } },
        react_1.default.createElement(FlexBox_1.default, { theme: TOP_FLEXBOX_THEME, style: { fontSize: '1.5em', borderBottom: '1px solid navy' } }, props.notebook.title),
        react_1.default.createElement(FlexBox_1.default, { theme: MID_FLEXBOX_THEME }, props.notebook.description),
        react_1.default.createElement(FlexBox_1.default, { theme: BOTTOM_FLEXBOX_THEME },
            react_1.default.createElement(PrimaryButton_1.default, { theme: BUTTON_THEME }, "Open"))));
};
exports.default = NotebookComponent;
//# sourceMappingURL=DashboardElement.js.map