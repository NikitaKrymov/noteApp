import styled from 'styled-components';

export default styled.div`
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
`