"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: ", ";\n    border: ", ";\n    color: ", ";\n    justify-content: center;\n    display: flex;\n    align-items: center;\n    padding: 0.5em 2em 0.5em 2em;\n    :hover {\n        background: ", ";\n        color: ", ";\n        cursor: pointer;\n        font-size: ", ";\n        text-decoration: ", ";\n        box-shadow: 0 0 3px white;\n        border-radius: 1em;\n    }\n"], ["\n    background: ", ";\n    border: ", ";\n    color: ", ";\n    justify-content: center;\n    display: flex;\n    align-items: center;\n    padding: 0.5em 2em 0.5em 2em;\n    :hover {\n        background: ", ";\n        color: ", ";\n        cursor: pointer;\n        font-size: ", ";\n        text-decoration: ", ";\n        box-shadow: 0 0 3px white;\n        border-radius: 1em;\n    }\n"])), function (props) { return props.theme.backgroundColor; }, function (props) { return props.theme.border; }, function (props) { return props.theme.color; }, function (props) { return props.theme.hoverBackgroundColor; }, function (props) { return props.theme.hoverColor; }, function (props) { return props.theme.hoverFontSize; }, function (props) { return props.theme.hoverTextDecoration; });
var templateObject_1;
//# sourceMappingURL=HeaderButton.js.map