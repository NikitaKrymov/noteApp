"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoutes = void 0;
var react_router_dom_1 = require("react-router-dom");
var react_1 = __importDefault(require("react"));
var history_1 = __importDefault(require("./history"));
var Notebook_1 = __importDefault(require("./components/notebookComponents/Notebook"));
var Dashboard_1 = __importDefault(require("./components/dashboard/Dashboard"));
exports.createRoutes = function () { return (react_1.default.createElement(react_router_dom_1.Router, { history: history_1.default },
    react_1.default.createElement(react_router_dom_1.Route, { path: "/", exact: true, component: Dashboard_1.default }),
    react_1.default.createElement(react_router_dom_1.Route, { path: "/:id", exact: true, component: Notebook_1.default }))); };
//# sourceMappingURL=routes.js.map