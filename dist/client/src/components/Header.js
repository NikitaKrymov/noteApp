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
const theme_1 = __importDefault(require("../theme"));
const history_1 = __importDefault(require("../history"));
const HeaderDiv_1 = __importDefault(require("../elements/headerElements/HeaderDiv"));
const NorebookCreateModal_1 = __importDefault(require("./notebookComponents/NorebookCreateModal"));
const HeaderButton_1 = __importDefault(require("../elements/headerElements/HeaderButton"));
const notebookActions_1 = require("../actions/notebookActions");
const authActions_1 = require("../actions/authActions");
const react_redux_1 = require("react-redux");
const HEADER_BUTTON = {
    color: theme_1.default.colors.white,
    backgroundColor: theme_1.default.colors.navy,
    border: '1px solid navy',
};
const Header = (props) => {
    const [createNotebook, setCreateNotebook] = react_1.useState(false);
    react_1.useEffect(() => {
        if (!props.authStatus) {
            history_1.default.push('/');
        }
    }, [props.authStatus]);
    return (react_1.default.createElement(HeaderDiv_1.default, null,
        createNotebook ? react_1.default.createElement(NorebookCreateModal_1.default, { closeCreateNotebook: setCreateNotebook, createNotebook: props.createNotebook, userId: props.userId }) : null,
        react_1.default.createElement(HeaderButton_1.default, { theme: HEADER_BUTTON, onClick: () => history_1.default.push('/') }, "Dashboard"),
        react_1.default.createElement(HeaderButton_1.default, { theme: HEADER_BUTTON, style: {
                opacity: props.authStatus ? '1' : '0'
            }, onClick: () => setCreateNotebook(!createNotebook) }, "Open Notebook"),
        react_1.default.createElement(HeaderButton_1.default, { theme: HEADER_BUTTON, style: { marginRight: '1em' }, onClick: () => props.authStatus ? props.logout() : null }, props.authStatus ? 'Log out' : 'Log In')));
};
const mapStateToProps = (state) => ({
    userId: state.app.userId,
});
const mapDispatchToProps = (dispatch) => ({
    createNotebook: (newNotebook) => dispatch(notebookActions_1.createNotebookRequest(newNotebook)),
    logout: () => dispatch(authActions_1.logoutUserRequest())
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Header);
//# sourceMappingURL=Header.js.map