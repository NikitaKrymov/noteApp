"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var DashboardDiv_1 = __importDefault(require("../../elements/dashboardElements/DashboardDiv"));
var DashboardElement_1 = __importDefault(require("./DashboardElement"));
var LoadingPage_1 = __importDefault(require("../../elements/LoadingPage"));
require("../../css/main.css");
var FlexBox_1 = __importDefault(require("../../elements/FlexBox"));
var theme_1 = __importDefault(require("../../theme"));
var TASKLIST_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    flexDirection: theme_1.default.flexDirection.row,
    alignItems: theme_1.default.alignItems.flexStart,
    flexWrap: theme_1.default.flexWrap.wrap
};
var WebPlannerDashboard = function (props) {
    if (props.isNotebookLoading) {
        return (react_1.default.createElement(LoadingPage_1.default, null,
            react_1.default.createElement("div", { className: "spinner" })));
    }
    else {
        return (react_1.default.createElement(DashboardDiv_1.default, null,
            react_1.default.createElement(FlexBox_1.default, { theme: TASKLIST_FLEXBOX_THEME, style: { width: '66em' } }, props.notebooks.map(function (notebook, i) {
                return (react_1.default.createElement(DashboardElement_1.default, { key: i, notebook: notebook }));
            }))));
    }
};
var mapStateToProps = function (state) { return ({
    notebooks: Object.values(state.app.userNotebooks),
    isNotebookLoading: state.app.isNotebookLoading
}); };
exports.default = react_redux_1.connect(mapStateToProps)(WebPlannerDashboard);
//# sourceMappingURL=Dashboard.js.map