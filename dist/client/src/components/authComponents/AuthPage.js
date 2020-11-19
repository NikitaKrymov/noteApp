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
var react_redux_1 = require("react-redux");
var authActions_1 = require("../../actions/authActions");
var AuthPageDiv_1 = __importDefault(require("../../elements/authElements/AuthPageDiv"));
var FormDiv_1 = __importDefault(require("../../elements/authElements/FormDiv"));
var FormInput_1 = __importDefault(require("../../elements/authElements/FormInput"));
var ErrorField_1 = __importDefault(require("../../elements/errorElements.tsx/ErrorField"));
var FlexBox_1 = __importDefault(require("../../elements/FlexBox"));
var GridBox_1 = __importDefault(require("../../elements/GridBox"));
var PrimaryButton_1 = __importDefault(require("../../elements/PrimaryButton"));
var theme_1 = __importDefault(require("../../theme"));
var LOGIN_FIELDS = [
    {
        label: "Username",
        type: 'text',
    },
    {
        label: "Password",
        type: 'password',
    }
];
var SIGNUP_FIELDS = [
    {
        label: "Username",
        type: 'text',
    },
    {
        label: "Password",
        type: 'password',
    },
    {
        label: 'Confirm Password',
        type: 'password',
    }
];
var SWITCH_BUTTON_STYLE = {
    color: 'navy',
    textDecoration: 'underline',
};
var LEFT_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems.center,
};
var RIGHT_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.flexStart,
    alignItems: theme_1.default.alignItems.center,
    flexDirection: theme_1.default.flexDirection.column,
};
var SIGNUP_RIGHT_GRIDBOX_THEME = {
    gridTemplateRows: '1fr 4fr'
};
var LOGIN_RIGHT_GRIDBOX_THEME = {
    gridTemplateRows: '1fr 2fr'
};
var BUTTON_THEME = {
    color: theme_1.default.colors.white,
    backgroundColor: theme_1.default.colors.navy,
    hoverColor: theme_1.default.colors.navy,
    hoverBackgroundColor: theme_1.default.colors.white,
    hoverBoxShadow: '0 0 3px navy',
    borderRadius: '1em',
    marginTop: '1em'
};
var GUEST_BUTTON_THEME = {
    color: theme_1.default.colors.navy,
    backgroundColor: theme_1.default.colors.white,
    hoverColor: theme_1.default.colors.navy,
    hoverBackgroundColor: theme_1.default.colors.white,
    hoverBoxShadow: '0 0 3px navy',
    borderRadius: '1em',
    marginTop: '1em'
};
var AuthPage = function (props) {
    var _a = react_1.useState(true), login = _a[0], setLogin = _a[1];
    var _b = react_1.useState(''), username = _b[0], setUsername = _b[1];
    var _c = react_1.useState(''), password = _c[0], setPassword = _c[1];
    var _d = react_1.useState(''), confirmPassword = _d[0], setConfirmPassword = _d[1];
    react_1.useEffect(function () {
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    }, [login]);
    if (login) {
        return (react_1.default.createElement(AuthPageDiv_1.default, null,
            react_1.default.createElement(FormDiv_1.default, null,
                react_1.default.createElement(FlexBox_1.default, { theme: LEFT_FLEXBOX_THEME, style: { fontSize: '4em', color: 'navy', borderRight: '2px solid navy', height: '100%' } }, "Login"),
                react_1.default.createElement(GridBox_1.default, { theme: LOGIN_RIGHT_GRIDBOX_THEME },
                    react_1.default.createElement(ErrorField_1.default, { style: { visibility: props.error ? 'visible' : 'hidden' } }, props.error),
                    react_1.default.createElement(FlexBox_1.default, { theme: RIGHT_FLEXBOX_THEME },
                        react_1.default.createElement(FormInput_1.default, { type: LOGIN_FIELDS[0].type, value: username, placeholder: LOGIN_FIELDS[0].label, onChange: function (e) { return setUsername(e.target.value); } }),
                        react_1.default.createElement(FormInput_1.default, { type: LOGIN_FIELDS[1].type, value: password, placeholder: LOGIN_FIELDS[1].label, onChange: function (e) { return setPassword(e.target.value); } }),
                        react_1.default.createElement(FlexBox_1.default, { theme: { flexDirection: theme_1.default.flexDirection.row } },
                            react_1.default.createElement(PrimaryButton_1.default, { theme: BUTTON_THEME, onClick: function () { return props.authenticateUser({ username: username, password: password }); } }, "Login"),
                            react_1.default.createElement(PrimaryButton_1.default, { theme: GUEST_BUTTON_THEME, style: { marginLeft: '1em' }, onClick: function () { return props.authenticateUser({ username: 'Guest', password: 'guest' }); } }, "Login as Guest")),
                        react_1.default.createElement("div", { style: { marginTop: '1em' } },
                            "Don't have an account? ",
                            react_1.default.createElement("a", { style: SWITCH_BUTTON_STYLE, onClick: function () { return setLogin(false); } }, "SignUp"),
                            " now!"))))));
    }
    else {
        return (react_1.default.createElement(AuthPageDiv_1.default, null,
            react_1.default.createElement(FormDiv_1.default, null,
                react_1.default.createElement(FlexBox_1.default, { theme: LEFT_FLEXBOX_THEME, style: { fontSize: '4em', color: 'navy', borderRight: '2px solid navy', height: '100%' } }, "Sign Up"),
                react_1.default.createElement(GridBox_1.default, { theme: SIGNUP_RIGHT_GRIDBOX_THEME },
                    react_1.default.createElement(ErrorField_1.default, { style: { visibility: props.error ? 'visible' : 'hidden' } }, props.error),
                    react_1.default.createElement(FlexBox_1.default, { theme: RIGHT_FLEXBOX_THEME },
                        react_1.default.createElement(FormInput_1.default, { type: SIGNUP_FIELDS[0].type, value: username, placeholder: SIGNUP_FIELDS[0].label, onChange: function (e) { return setUsername(e.target.value); }, onBlur: function () { return props.validateUsername(username); } }),
                        react_1.default.createElement(FormInput_1.default, { type: SIGNUP_FIELDS[1].type, value: password, placeholder: SIGNUP_FIELDS[1].label, onChange: function (e) { return setPassword(e.target.value); } }),
                        react_1.default.createElement(FormInput_1.default, { type: SIGNUP_FIELDS[2].type, value: confirmPassword, placeholder: SIGNUP_FIELDS[2].label, onChange: function (e) { return setConfirmPassword(e.target.value); }, onBlur: function () { return props.error.length > 0 ? null : props.validatePasswords({ password: password, confirmPassword: confirmPassword }); } }),
                        react_1.default.createElement(PrimaryButton_1.default, { theme: BUTTON_THEME, onClick: function () { return props.error.length > 0 ? null : props.registerUser({ username: username, password: password, confirmPassword: confirmPassword }); } }, "SignUp"),
                        react_1.default.createElement("div", { style: { marginTop: '1em' } },
                            "Do you have an account? ",
                            react_1.default.createElement("a", { style: SWITCH_BUTTON_STYLE, onClick: function () { return setLogin(true); } }, "Log In"),
                            " now!"))))));
    }
};
var mapDispatchToProps = function (dispatch) { return ({
    validateUsername: function (username) { return dispatch(authActions_1.validateUsername(username)); },
    authenticateUser: function (credentials) { return dispatch(authActions_1.authenticateUser(credentials)); },
    registerUser: function (credentials) { return dispatch(authActions_1.registerUser(credentials)); },
    validatePasswords: function (passwords) { return dispatch(authActions_1.validatePasswordsRequest(passwords)); }
}); };
var mapStateToProps = function (state) { return ({
    error: state.errors.authError
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(AuthPage);
//# sourceMappingURL=AuthPage.js.map