"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
exports.default = styled_components_1.default.div `
    display: flex;
    justify-content: center;
    width: 2em;
    height: 2em;
    box-shadow: 0 0 3px navy;
    border-radius: 50%;
    color: white;
    background-color: navy;
    margin-right: 1em;
    :hover {
        background-color: white;
        color: navy;
        box-shadow: 0 0 3px navy;
        cursor: pointer;
    }
`;
//# sourceMappingURL=NewTaskButton.js.map