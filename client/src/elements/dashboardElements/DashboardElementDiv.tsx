import styled from 'styled-components';

export default styled.div`
    display: grid;
    margin: 1em;
    width: 20em;
    height: 20em;
    box-shadow: 0 0 3px black;
    border-radius: 1em;
    grid-template-rows: 1fr 3fr 1fr;
    position: relative;
    transition: 0.2s;
    text-align: left;
    background-color: white;
    :hover {
        transform: translateY(-0.5em);
        cursor: pointer;
        box-shadow: 0 0 3px navy;
    }
`