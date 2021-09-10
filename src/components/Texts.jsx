import styled from "styled-components";

const StyledTitle = styled.h1`
    font-weight: 700;
    font-size: ${props => props.fsize || '2rem'};
    color: ${props => props.theme.colors.accent};
`

const StyledDescr = styled.div`
    line-height: 1.4rem;
    font-weight: 300;
    margin-top: 1rem;
    text-align: ${props => props.align || 'center'};
`

const StyledSubTitle = styled.h2`
    text-align: ${props => props.align || 'right'};
    font-size: 1.2rem;
    font-weight: 500;
`

export {StyledDescr, StyledSubTitle, StyledTitle}