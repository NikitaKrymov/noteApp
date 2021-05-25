import styled from 'styled-components';

export default styled.div`
    display: grid;
    width: 20em;
    margin: 1em;
    height: 20em;
    border-radius: 0.5em;
    grid-template-rows: 1fr 3fr 1fr;
    position: relative;
    transition: 0.2s;
    box-shadow: 0 2px 2px grey;
    :hover {
        //transform: translateY(-0.2em);
        cursor: pointer;
    }
    background: inherit;
    :after{
        content: '';
        width: 100%;
        height: 100%;
        background: white;
        opacity: 1;
        position: absolute;
        border-radius: 0.2em;
        z-index: 2;
    }
`