import React from 'react';
import styled from 'styled-components';
import { BackButton, StyledLinkButton } from '../components/Buttons';
import Flexbox from '../components/Flexbox';
import { StyledSubTitle, StyledDescr } from '../components/Texts';

const StyledLink = styled.a`
    margin-top: 2rem;
    opacity: 0.7;
    font-size: 0.7rem;
    font-weight: 300;
    text-decoration: none;
    color: ${props => props.theme.font.dark};
    transition: 0.3s all;
    &:hover {
        opacity: 1;
    }
`

const About = () => {
    return (
        <Flexbox direction="column" heigth="100%" justify="center" align="center" padding="2rem 1rem 1rem 1rem">
            <BackButton/>
            <h1>Mind Math</h1>
            <StyledSubTitle>version 1.0.0 public</StyledSubTitle>
            <StyledDescr align="left">
            Mind Math is a open source web application for training oral counting. The application has 5 main modes: a mode with addition of numbers, subtraction, multiplication, division and a random mode combining the previous 4. You can independently configure the maximum number of digits for each mode.
            </StyledDescr>
            <StyledDescr align="left">I also tried to collect some tips on improving the oral account found on the Internet. I hope the application will be useful to you and you will not only pass the time, but also train your brain.</StyledDescr>
            <StyledDescr align="left">In the future, I plan to add various modes for speed and perhaps some company mode with a gradual complication of the difficulty level.</StyledDescr>
            <Flexbox direction="column" justify="center" align="center" padding="2rem 0 0 0">
                <StyledLinkButton target="_blank" href="https://github.com/cheatsnake/MindMath">View on GitHub <ion-icon name="logo-github"></ion-icon></StyledLinkButton>
                <StyledLink target="_blank" href="https://cheatsnake.github.io/">Made by <b>Yury</b></StyledLink>
            </Flexbox>
        </Flexbox>
    );
};

export default About;