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
var theme_1 = __importDefault(require("../theme"));
var history_1 = __importDefault(require("../history"));
var HeaderDiv_1 = __importDefault(require("../elements/headerElements/HeaderDiv"));
var NorebookCreateModal_1 = __importDefault(require("./notebookComponents/NorebookCreateModal"));
var HeaderButton_1 = __importDefault(require("../elements/headerElements/HeaderButton"));
var notebookActions_1 = require("../actions/notebookActions");
var authActions_1 = require("../actions/authActions");
var react_redux_1 = require("react-redux");
var HEADER_BUTTON = {
    color: theme_1.default.colors.white,
    backgroundColor: theme_1.default.colors.navy,
    border: '1px solid navy',
};
var Header = function (props) {
    var _a = react_1.useState(false), createNotebook = _a[0], setCreateNotebook = _a[1];
    react_1.useEffect(function () {
        if (!props.authStatus) {
            history_1.default.push('/');
        }
    }, [props.authStatus]);
    return (react_1.default.createElement(HeaderDiv_1.default, null,
        createNotebook ? react_1.default.createElement(NorebookCreateModal_1.default, { closeCreateNotebook: setCreateNotebook, createNotebook: props.createNotebook, userId: props.userId }) : null,
        react_1.default.createElement(HeaderButton_1.default, { theme: HEADER_BUTTON, onClick: function () { return history_1.default.push('/'); } }, "Dashboard"),
        react_1.default.createElement(HeaderButton_1.default, { theme: HEADER_BUTTON, style: {
                opacity: props.authStatus ? '1' : '0'
            }, onClick: function () { return setCreateNotebook(!createNotebook); } }, "Open Notebook"),
        react_1.default.createElement(HeaderButton_1.default, { theme: HEADER_BUTTON, style: { marginRight: '1em' }, onClick: function () { return props.authStatus ? props.logout() : null; } }, props.authStatus ? 'Log out' : 'Log In')));
};
var mapStateToProps = function (state) { return ({
    userId: state.app.userId,
}); };
var mapDispatchToProps = function (dispatch) { return ({
    createNotebook: function (newNotebook) { return dispatch(notebookActions_1.createNotebookRequest(newNotebook)); },
    logout: function () { return dispatch(authActions_1.logoutUserRequest()); }
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Header);
//# sourceMappingURL=Header.js.map