import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em 2em 0.5em 2em;
    color: ${props => props.theme.color};
    border: ${props => props.theme.border};
    transition: 0.2s;
    background: ${props => props.theme.backgroundColor};
    box-shadow: ${props => props.theme.boxShadow};
    font-size: 1.2em;
    border-radius: ${props => props.theme.borderRadius};
    margin-top: ${props => props.theme.marginTop};
    margin-right: ${props => props.theme.marginRight};
    margin-left: ${props => props.theme.marginLeft};
    margin-bottom: ${props => props.theme.marginBottom};
    z-index: 3;
    :hover {
        transition: 0.2s;
        color: ${props => props.theme.hoverColor};
        border: ${props => props.theme.hoverBorder};
        background: ${props => props.theme.hoverBackgroundColor};
        box-shadow: ${props => props.theme.hoverBoxShadow};
        border-radius: ${props => props.theme.hoverBorderRadius};
        cursor: pointer;
    }
`