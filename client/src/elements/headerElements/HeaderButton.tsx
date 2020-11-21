import styled from 'styled-components';

export default styled.div`
    background: ${props => props.theme.backgroundColor};
    border: ${props => props.theme.border};
    color: ${props => props.theme.color};
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 1.5em;
    padding: 0.5em 2em 0.5em 2em;
    :hover {
        background: white;
        color: navy;
        cursor: pointer;
        font-size: ${props => props.theme.hoverFontSize};
        text-decoration: ${props => props.theme.hoverTextDecoration};
        box-shadow: 0 0 10px navy;
        border-radius: 1em;
    }
`