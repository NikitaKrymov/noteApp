"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
exports.default = styled_components_1.default.div `
    display: grid;
    margin: 1em;
    width: 20em;
    height: 20em;
    box-shadow: 0 0 3px black;
    border-radius: 1em;
    grid-template-rows: 1fr 3fr 1fr;
    position: relative;
    transition: 0.2s;
    text-align: left;
    background-color: white;
    :hover {
        transform: translateY(-0.5em);
        cursor: pointer;
        box-shadow: 0 0 3px navy;
    }
`;
//# sourceMappingURL=DashboardElementDiv.js.map