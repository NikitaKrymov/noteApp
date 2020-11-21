import styled from 'styled-components';

export default styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: 2px;
    overflow: hidden;
    :after{
        content: '';
        background: inherit; 
        position: absolute;
        filter: blur(10px);
        z-index: 10;
    }
`