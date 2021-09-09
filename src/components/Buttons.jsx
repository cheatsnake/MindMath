import styled from "styled-components";
import {Link} from 'react-router-dom';

const StyledButton = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 0.2rem;
    transition: 0.4s all;
    background-color: ${props => props.theme.colors.grey};
    color: ${props => props.theme.font.dark};
`

const StyledMenuButton = styled(Link)`
    cursor: pointer;
    border: none;
    border-radius: 0.2rem;
    transition: 0.5s all;
    background-color: ${props => props.theme.colors.grey};
    color: ${props => props.theme.font.dark};
    width: 100%;
    margin-top: 1rem;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    &:hover {
        background-color: ${props => props.theme.colors.accent};
    }
`

const StyledModeButton = styled(Link)`
    cursor: pointer;
    border: none;
    border-radius: 0.2rem;
    transition: 0.4s all;
    background-color: ${props => props.theme.colors.grey};
    color: ${props => props.theme.font.dark};
    display: flex;
    flex-direction: column;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    min-width: 45%;
    padding: 1rem;
    ion-icon {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
    &:hover {
        background-color: ${props => props.theme.colors.accent};
        font-weight: 400;
    }
`

const StyledBackButton = styled(Link)`
    cursor: pointer;
    border: none;
    opacity: 0.7;
    border-radius: 0.2rem;
    transition: 0.5s all;
    color: ${props => props.theme.font.dark};
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: inherit;
    width: 50px;
    height: 50px;
    ion-icon {
        transition: 0.5s all;
        font-size: 2rem;
        &:hover {
            color: ${props => props.theme.colors.accent};
        }
    }
    &:hover {
        opacity: 1;
    }
`

const StyledKeyboardButton = styled(StyledButton)`
    border-radius: 0;
    font-size: 2rem;
    font-weight: 300;
    background-color: ${props => props.theme.colors.grey};
    ion-icon {
        font-size: 2rem;
    }
    &:hover {
        background-color: ${props => props.theme.colors.accent};
    }
    &:focus {
        outline: none;
    }
`
const StyledBitButton = styled(StyledButton)`
    padding: 0.1rem 0.8rem 0.3rem 0.8rem;
    font-size: 2rem;
    &:hover {
        background-color: ${props => props.theme.colors.accent};
    }
`

export {StyledMenuButton, StyledModeButton, StyledBackButton, StyledKeyboardButton, StyledBitButton};