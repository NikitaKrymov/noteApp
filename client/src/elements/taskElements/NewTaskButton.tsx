import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: center;
    width: 2em;
    height: 2em;
    box-shadow: 0 0 3px navy;
    border-radius: 50%;
    color: white;
    background-color: navy;
    margin-right: 1em;
    :hover {
        background-color: white;
        color: navy;
        box-shadow: 0 0 3px navy;
        cursor: pointer;
    }
`