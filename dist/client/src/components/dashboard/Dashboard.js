"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const DashboardDiv_1 = __importDefault(require("../../elements/dashboardElements/DashboardDiv"));
const DashboardElement_1 = __importDefault(require("./DashboardElement"));
const WebPlannerDashboard = (props) => {
    if (props.isNotebookLoading) {
        console.log('was loading');
        return (react_1.default.createElement("div", null, "Loading"));
    }
    else {
        console.log(props.notebooks);
        return (react_1.default.createElement(DashboardDiv_1.default, null,
            react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', maxWidth: '66em' } }, props.notebooks.map((notebook, i) => {
                return (react_1.default.createElement(DashboardElement_1.default, { key: i, notebook: notebook }));
            }))));
    }
};
const mapStateToProps = (state) => ({
    notebooks: Object.values(state.app.userNotebooks),
    isNotebookLoading: state.app.isNotebookLoading
});
exports.default = react_redux_1.connect(mapStateToProps)(WebPlannerDashboard);
//# sourceMappingURL=Dashboard.js.map