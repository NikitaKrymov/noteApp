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
const react_redux_1 = require("react-redux");
const authActions_1 = require("../actions/authActions");
const GlobalStyle_1 = __importDefault(require("../elements/GlobalStyle"));
const GridBox_1 = __importDefault(require("../elements/GridBox"));
const routes_1 = require("../routes");
const AuthPage_1 = __importDefault(require("./authComponents/AuthPage"));
const Header_1 = __importDefault(require("./Header"));
const routes = routes_1.createRoutes();
const App = (props) => {
    react_1.useEffect(() => {
        props.fetchUser();
    });
    if (props.isLoading) {
        return (react_1.default.createElement("div", null, "Loading"));
    }
    else {
        if (props.authStatus) {
            return (react_1.default.createElement(GridBox_1.default, { theme: { position: 'relative' } },
                react_1.default.createElement(GlobalStyle_1.default, null),
                react_1.default.createElement(Header_1.default, { authStatus: props.authStatus }),
                react_1.default.createElement("div", { style: { marginTop: '4em' } }, routes)));
        }
        else {
            return (react_1.default.createElement(GridBox_1.default, { theme: { position: 'fixed' } },
                react_1.default.createElement(AuthPage_1.default, null)));
        }
    }
};
const mapStateToProps = (state) => ({
    authStatus: state.app.authStatus,
    isLoading: state.app.isUserLoading
});
const mapDispatchToProps = (dispatch) => ({
    fetchUser: () => dispatch(authActions_1.fetchUserRequest())
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=App.js.map