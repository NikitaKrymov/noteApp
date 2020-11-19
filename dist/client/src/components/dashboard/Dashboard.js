"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var DashboardDiv_1 = __importDefault(require("../../elements/dashboardElements/DashboardDiv"));
var DashboardElement_1 = __importDefault(require("./DashboardElement"));
var WebPlannerDashboard = function (props) {
    if (props.isNotebookLoading) {
        console.log('was loading');
        return (react_1.default.createElement("div", null, "Loading"));
    }
    else {
        console.log(props.notebooks);
        return (react_1.default.createElement(DashboardDiv_1.default, null,
            react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', maxWidth: '66em' } }, props.notebooks.map(function (notebook, i) {
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