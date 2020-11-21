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
exports.default = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background: inherit;\n    border-radius: 2px;\n    overflow: hidden;\n    :after{\n        content: '';\n        background: inherit; \n        position: absolute;\n        filter: blur(10px);\n        z-index: 10;\n    }\n"], ["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    background: inherit;\n    border-radius: 2px;\n    overflow: hidden;\n    :after{\n        content: '';\n        background: inherit; \n        position: absolute;\n        filter: blur(10px);\n        z-index: 10;\n    }\n"])));
var templateObject_1;
//# sourceMappingURL=BlurDiv.js.map