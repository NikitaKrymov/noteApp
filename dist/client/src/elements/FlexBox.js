"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
exports.default = styled_components_1.default.div `
    display: flex;
    justify-content: ${props => props.theme.justifyContent};
    flex-direction: ${props => props.theme.flexDirection};
    text-align: ${props => props.theme.textAlign};
    align-items: ${props => props.theme.alignItems};
    margin: ${props => props.theme.margin};
    padding-right: ${props => props.theme.paddingRight};
    padding-top: ${props => props.theme.paddingTop};
    padding-left: ${props => props.theme.paddingLeft};
    padding-bottom: ${props => props.theme.paddingBottom};
    position: ${props => props.theme.position};
    font-size: ${props => props.theme.fontSize};
    flex-wrap: ${props => props.theme.flexWrap};
`;
//# sourceMappingURL=FlexBox.js.map