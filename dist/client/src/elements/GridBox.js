"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
exports.default = styled_components_1.default.div `
    display: grid;
    grid-template-columns: ${props => props.theme.gridTemplateColumns};
    grid-auto-flow: ${props => props.theme.gridAutoFlow};
    grid-template-rows: ${props => props.theme.gridTemplateRows};
    position: ${props => props.theme.position};
    height: 100%;
    width: 100%;
`;
//# sourceMappingURL=GridBox.js.map