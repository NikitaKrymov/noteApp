"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
exports.default = styled_components_1.default.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: navy;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.5em;
    color: white;
    padding-right: 1em;
    z-index: 100;
`;
//# sourceMappingURL=HeaderDiv.js.map