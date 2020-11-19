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
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: grid;\n    grid-template-columns: ", ";\n    grid-auto-flow: ", ";\n    grid-template-rows: ", ";\n    position: ", ";\n    height: 100%;\n    width: 100%;\n"], ["\n    display: grid;\n    grid-template-columns: ", ";\n    grid-auto-flow: ", ";\n    grid-template-rows: ", ";\n    position: ", ";\n    height: 100%;\n    width: 100%;\n"])), function (props) { return props.theme.gridTemplateColumns; }, function (props) { return props.theme.gridAutoFlow; }, function (props) { return props.theme.gridTemplateRows; }, function (props) { return props.theme.position; });
var templateObject_1;
//# sourceMappingURL=GridBox.js.map