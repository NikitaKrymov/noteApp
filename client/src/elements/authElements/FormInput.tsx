import styled from 'styled-components';

export default styled.input`
    text-decoration: none;
    width: 20em;
    margin-top: 1em;
    margin-bottom: 1em;
    border: none;
    outline: none;
    padding: 1em;
    font-size: 1.1em;
    border-bottom: 1px solid navy;
    background: none;
    color: navy;
    z-index:3;
    :focus {
        border-bottom: 1px solid navy;
    }
    ::placeholder{
        color: navy;
    }
`