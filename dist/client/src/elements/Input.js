"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
exports.default = styled_components_1.default.input `
    text-decoration: none;
    margin-left: 1em;
    width: 100%;
    border: none;
    outline: none;
    padding: 1em;
    font-size: 1.1em;
    border-bottom: 1px solid lightgrey;
    :focus {
        border-bottom: 1px solid navy;
    }
`;
//# sourceMappingURL=Input.js.map