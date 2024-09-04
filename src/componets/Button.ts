import styled from "styled-components";
import { theme } from "../styles/Theme";


export const Button = styled.button `
    width: 170px;
    height: 32px;
    text-transform: uppercase;
    letter-spacing: 1px; 
    position: relative; 
    z-index: 0; 

    &:hover {
        &::before {
            height: 100%; 
            width: 100%; 
        }
    }

    &::before {
        content:"";
        display: inline-block; 
        height: 10px; 
        width: 77px;
        background-color: ${theme.colors.accent}; 
        transition: ${theme.animations.transition}; 
        position: absolute;
        z-index: -1;  
        bottom: 0; 
        left: 50%; 
        transform: translateX(-50%)
    }
`