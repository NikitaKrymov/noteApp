"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
exports.default = styled_components_1.default.input `
    text-decoration: none;
    width: 80%;
    margin-top: 1em;
    margin-bottom: 1em;
    border: none;
    outline: none;
    padding: 1em;
    font-size: 1.1em;
    border-bottom: 1px solid lightgrey;
    :focus {
        border-bottom: 1px solid navy;
    }
`;
//# sourceMappingURL=FormInput.js.map