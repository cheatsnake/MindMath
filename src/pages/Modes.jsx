import React from 'react';
import { StyledBackButton, StyledModeButton } from '../components/Buttons';
import Flexbox from '../components/Flexbox';

const Modes = () => {
    return (
        <Flexbox direction="column" justify="center" align="center" padding="1rem">
            <StyledBackButton to="/menu">
                <ion-icon name="arrow-back-outline"></ion-icon>
            </StyledBackButton>
            <h1>Choose game mode</h1>
            <Flexbox justify="space-around" margin="1rem 0 0 0" wrap="wrap">
                <StyledModeButton to="/game">
                    <ion-icon name="add-outline"></ion-icon>
                    Addition
                    </StyledModeButton>
                <StyledModeButton to="/game">
                    <ion-icon name="remove-outline"></ion-icon>
                    Subtraction
                </StyledModeButton>
                <StyledModeButton to="/game">
                    <ion-icon name="close-outline"></ion-icon>
                    Multiplication
                </StyledModeButton>
                <StyledModeButton to="/game">
                    <ion-icon name="pause-outline"></ion-icon>
                    Division
                </StyledModeButton>
                <StyledModeButton to="/game">
                    <ion-icon name="cube-outline"></ion-icon>
                    Random
                </StyledModeButton>
            </Flexbox>
        </Flexbox>
    );
};

export default Modes;