import React from 'react';
import { StyledBackButton, StyledModeButton } from '../components/Buttons';
import Flexbox from '../components/Flexbox';
import Gridbox from '../components/Gridbox';

const Modes = () => {
    return (
        <Flexbox direction="column" justify="center" align="center" padding="1rem">
            <StyledBackButton to="/menu">
                <ion-icon name="menu-outline"></ion-icon>
            </StyledBackButton>
            <h1>Choose game mode</h1>
            <Flexbox justify="space-around" margin="1rem 0 0 0" wrap="wrap">
                <StyledModeButton>
                    <ion-icon name="add-outline"></ion-icon>
                    Addition
                    </StyledModeButton>
                <StyledModeButton>
                    <ion-icon name="remove-outline"></ion-icon>
                    Subtraction
                </StyledModeButton>
                <StyledModeButton>
                    <ion-icon name="close-outline"></ion-icon>
                    Multiplication
                </StyledModeButton>
                <StyledModeButton>
                    <ion-icon name="pause-outline"></ion-icon>
                    Division
                </StyledModeButton>
                <StyledModeButton>
                    <ion-icon name="cube-outline"></ion-icon>
                    Random
                </StyledModeButton>
            </Flexbox>
        </Flexbox>
    );
};

export default Modes;