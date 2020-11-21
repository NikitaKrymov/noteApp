import styled from 'styled-components';

export default styled.div`
    display: grid;
    width: 20em;
    margin: 1em;
    height: 20em;
    box-shadow: 0 0 5px black;
    border-radius: 0.5em;
    grid-template-rows: 1fr 3fr 1fr;
    position: relative;
    transition: 0.2s;
    :hover {
        transform: translateY(-0.2em);
        cursor: pointer;
        box-shadow: 0 0 10px navy;
    }
    background: inherit;
    :after{
        content: '';
        width: 100%;
        height: 100%;
        background: white;
        opacity: 0.5;
        position: absolute;
        border-radius: 0.5em;
        z-index: 2;
    }
`