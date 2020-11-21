import styled from 'styled-components';

export default styled.div`
    width: 50em;
    height: 40em;
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 3fr;
    border-radius: 0.5em;
    box-shadow: 2px 2px 10px black;
    position: relative;
    background: inherit;
    :after{
        content: '';
        width: 100%;
        height: 100%;
        background: white;
        opacity: 0.2;
        position: absolute;
        border-radius: 0.5em;
        z-index: 2;
    }
`