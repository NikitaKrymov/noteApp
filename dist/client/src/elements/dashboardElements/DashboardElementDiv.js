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
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: grid;\n    width: 20em;\n    margin: 1em;\n    height: 20em;\n    box-shadow: 0 0 5px black;\n    border-radius: 0.5em;\n    grid-template-rows: 1fr 3fr 1fr;\n    position: relative;\n    transition: 0.2s;\n    :hover {\n        transform: translateY(-0.2em);\n        cursor: pointer;\n        box-shadow: 0 0 10px navy;\n    }\n    background: inherit;\n    :after{\n        content: '';\n        width: 100%;\n        height: 100%;\n        background: white;\n        opacity: 0.5;\n        position: absolute;\n        border-radius: 0.5em;\n        z-index: 2;\n    }\n"], ["\n    display: grid;\n    width: 20em;\n    margin: 1em;\n    height: 20em;\n    box-shadow: 0 0 5px black;\n    border-radius: 0.5em;\n    grid-template-rows: 1fr 3fr 1fr;\n    position: relative;\n    transition: 0.2s;\n    :hover {\n        transform: translateY(-0.2em);\n        cursor: pointer;\n        box-shadow: 0 0 10px navy;\n    }\n    background: inherit;\n    :after{\n        content: '';\n        width: 100%;\n        height: 100%;\n        background: white;\n        opacity: 0.5;\n        position: absolute;\n        border-radius: 0.5em;\n        z-index: 2;\n    }\n"])));
var templateObject_1;
//# sourceMappingURL=DashboardElementDiv.js.map