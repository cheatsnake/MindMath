import React from 'react';
import styled from 'styled-components';
import { BackButton, RefreshButton } from './Buttons';
import Flexbox from './Flexbox';
import { StyledSubTitle, StyledTitle } from './Texts';

const StyledResultWindow = styled(Flexbox)`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.colors.grey};
    color: ${props => props.theme.font.dark};
    z-index: 10;
`

const StyledResultCount = styled.div`
    font-size: 2.5rem;
    font-weight: 400;
    text-align: center;
    color: ${props => props.color || "inherit"};
    margin: ${props => props.margin || "0"};
`

const ResultWindow = (props) => {

    const {refresh} = props;

    return (
        <StyledResultWindow direction="column" justify="center" align="center" height="100vh">
            <BackButton/>
            <StyledTitle color="#fff">Results</StyledTitle>

            <Flexbox justify="center" margin="2rem 0 0 0">
                <Flexbox width="auto" direction="column" justify="center" margin="0 2rem 0 0">
                    <StyledResultCount color="#0fa36a">{props.true}</StyledResultCount>
                    <StyledSubTitle>correct</StyledSubTitle>
                </Flexbox>
                <Flexbox width="auto" direction="column" justify="center">
                    <StyledResultCount color="#e74747">{props.false}</StyledResultCount>
                    <StyledSubTitle>wrong</StyledSubTitle>
                </Flexbox>
            </Flexbox>
            <Flexbox justify="center" margin="2rem 0 0 0">
                <Flexbox width="auto" direction="column" justify="center" margin="0 2rem 0 0">
                    <StyledResultCount>{props.accuracy}</StyledResultCount>
                    <StyledSubTitle>accurancy</StyledSubTitle>
                </Flexbox>
                <Flexbox width="auto" direction="column" justify="center">
                    <StyledResultCount>{props.time}</StyledResultCount>
                    <StyledSubTitle>time</StyledSubTitle>
                </Flexbox>
            </Flexbox>

            <RefreshButton refresh={refresh}/>
            
        </StyledResultWindow>
    );
};

export default ResultWindow;