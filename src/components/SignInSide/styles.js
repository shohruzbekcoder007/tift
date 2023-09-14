import styled from "styled-components";

export const LoaderWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.834);
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LoginLogo = styled.div`
    /* width: 100%; */
    img {
        width: 300px;
    }
    @media screen and (max-width: 400px) {
        width: 200px;
        img {
            display: inline-block;
            width: 100%;
        }
    }
    
`
