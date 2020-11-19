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
const authActions_1 = require("../../actions/authActions");
const AuthPageDiv_1 = __importDefault(require("../../elements/authElements/AuthPageDiv"));
const FormDiv_1 = __importDefault(require("../../elements/authElements/FormDiv"));
const FormInput_1 = __importDefault(require("../../elements/authElements/FormInput"));
const ErrorField_1 = __importDefault(require("../../elements/errorElements.tsx/ErrorField"));
const FlexBox_1 = __importDefault(require("../../elements/FlexBox"));
const GridBox_1 = __importDefault(require("../../elements/GridBox"));
const PrimaryButton_1 = __importDefault(require("../../elements/PrimaryButton"));
const theme_1 = __importDefault(require("../../theme"));
const LOGIN_FIELDS = [
    {
        label: "Username",
        type: 'text',
    },
    {
        label: "Password",
        type: 'password',
    }
];
const SIGNUP_FIELDS = [
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
const SWITCH_BUTTON_STYLE = {
    color: 'navy',
    textDecoration: 'underline',
};
const LEFT_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.center,
    alignItems: theme_1.default.alignItems.center,
};
const RIGHT_FLEXBOX_THEME = {
    justifyContent: theme_1.default.justifyContent.flexStart,
    alignItems: theme_1.default.alignItems.center,
    flexDirection: theme_1.default.flexDirection.column,
};
const SIGNUP_RIGHT_GRIDBOX_THEME = {
    gridTemplateRows: '1fr 4fr'
};
const LOGIN_RIGHT_GRIDBOX_THEME = {
    gridTemplateRows: '1fr 2fr'
};
const BUTTON_THEME = {
    color: theme_1.default.colors.white,
    backgroundColor: theme_1.default.colors.navy,
    hoverColor: theme_1.default.colors.navy,
    hoverBackgroundColor: theme_1.default.colors.white,
    hoverBoxShadow: '0 0 3px navy',
    borderRadius: '1em',
    marginTop: '1em'
};
const GUEST_BUTTON_THEME = {
    color: theme_1.default.colors.navy,
    backgroundColor: theme_1.default.colors.white,
    hoverColor: theme_1.default.colors.navy,
    hoverBackgroundColor: theme_1.default.colors.white,
    hoverBoxShadow: '0 0 3px navy',
    borderRadius: '1em',
    marginTop: '1em'
};
const AuthPage = (props) => {
    const [login, setLogin] = react_1.useState(true);
    const [username, setUsername] = react_1.useState('');
    const [password, setPassword] = react_1.useState('');
    const [confirmPassword, setConfirmPassword] = react_1.useState('');
    react_1.useEffect(() => {
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
                        react_1.default.createElement(FormInput_1.default, { type: LOGIN_FIELDS[0].type, value: username, placeholder: LOGIN_FIELDS[0].label, onChange: (e) => setUsername(e.target.value) }),
                        react_1.default.createElement(FormInput_1.default, { type: LOGIN_FIELDS[1].type, value: password, placeholder: LOGIN_FIELDS[1].label, onChange: (e) => setPassword(e.target.value) }),
                        react_1.default.createElement(FlexBox_1.default, { theme: { flexDirection: theme_1.default.flexDirection.row } },
                            react_1.default.createElement(PrimaryButton_1.default, { theme: BUTTON_THEME, onClick: () => props.authenticateUser({ username, password }) }, "Login"),
                            react_1.default.createElement(PrimaryButton_1.default, { theme: GUEST_BUTTON_THEME, style: { marginLeft: '1em' }, onClick: () => props.authenticateUser({ username: 'Guest', password: 'guest' }) }, "Login as Guest")),
                        react_1.default.createElement("div", { style: { marginTop: '1em' } },
                            "Don't have an account? ",
                            react_1.default.createElement("a", { style: SWITCH_BUTTON_STYLE, onClick: () => setLogin(false) }, "SignUp"),
                            " now!"))))));
    }
    else {
        return (react_1.default.createElement(AuthPageDiv_1.default, null,
            react_1.default.createElement(FormDiv_1.default, null,
                react_1.default.createElement(FlexBox_1.default, { theme: LEFT_FLEXBOX_THEME, style: { fontSize: '4em', color: 'navy', borderRight: '2px solid navy', height: '100%' } }, "Sign Up"),
                react_1.default.createElement(GridBox_1.default, { theme: SIGNUP_RIGHT_GRIDBOX_THEME },
                    react_1.default.createElement(ErrorField_1.default, { style: { visibility: props.error ? 'visible' : 'hidden' } }, props.error),
                    react_1.default.createElement(FlexBox_1.default, { theme: RIGHT_FLEXBOX_THEME },
                        react_1.default.createElement(FormInput_1.default, { type: SIGNUP_FIELDS[0].type, value: username, placeholder: SIGNUP_FIELDS[0].label, onChange: (e) => setUsername(e.target.value), onBlur: () => props.validateUsername(username) }),
                        react_1.default.createElement(FormInput_1.default, { type: SIGNUP_FIELDS[1].type, value: password, placeholder: SIGNUP_FIELDS[1].label, onChange: (e) => setPassword(e.target.value) }),
                        react_1.default.createElement(FormInput_1.default, { type: SIGNUP_FIELDS[2].type, value: confirmPassword, placeholder: SIGNUP_FIELDS[2].label, onChange: (e) => setConfirmPassword(e.target.value), onBlur: () => props.error.length > 0 ? null : props.validatePasswords({ password, confirmPassword }) }),
                        react_1.default.createElement(PrimaryButton_1.default, { theme: BUTTON_THEME, onClick: () => props.error.length > 0 ? null : props.registerUser({ username, password, confirmPassword }) }, "SignUp"),
                        react_1.default.createElement("div", { style: { marginTop: '1em' } },
                            "Do you have an account? ",
                            react_1.default.createElement("a", { style: SWITCH_BUTTON_STYLE, onClick: () => setLogin(true) }, "Log In"),
                            " now!"))))));
    }
};
const mapDispatchToProps = (dispatch) => ({
    validateUsername: (username) => dispatch(authActions_1.validateUsername(username)),
    authenticateUser: (credentials) => dispatch(authActions_1.authenticateUser(credentials)),
    registerUser: (credentials) => dispatch(authActions_1.registerUser(credentials)),
    validatePasswords: (passwords) => dispatch(authActions_1.validatePasswordsRequest(passwords))
});
const mapStateToProps = (state) => ({
    error: state.errors.authError
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(AuthPage);
//# sourceMappingURL=AuthPage.js.map