"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
exports.default = styled_components_1.default.div `
    background: ${props => props.theme.backgroundColor};
    border: ${props => props.theme.border};
    color: ${props => props.theme.color};
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 0.5em 2em 0.5em 2em;
    :hover {
        background: ${props => props.theme.hoverBackgroundColor};
        color: ${props => props.theme.hoverColor};
        cursor: pointer;
        font-size: ${props => props.theme.hoverFontSize};
        text-decoration: ${props => props.theme.hoverTextDecoration};
        box-shadow: 0 0 3px white;
        border-radius: 1em;
    }
`;
//# sourceMappingURL=HeaderButton.js.map