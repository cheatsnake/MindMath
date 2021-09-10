import React from 'react';
import { BackButton, StyledModeButton } from '../components/Buttons';
import Flexbox from '../components/Flexbox';
import { modeTaskReducer } from '../store/TaskReducer';
import { useDispatch } from 'react-redux';
import { StyledTitle } from '../components/Texts';

const Modes = () => {

    const dispatch = useDispatch();
    function onMode(mode) {
        dispatch(modeTaskReducer(mode))
    }

    return (
        <Flexbox direction="column" justify="center" align="center" padding="1rem">
            <BackButton/>
            <StyledTitle fsize="1.5rem">Choose game mode</StyledTitle>
            <Flexbox justify="space-around" margin="1rem 0 0 0" wrap="wrap">
                <StyledModeButton onClick={() => onMode('ADDITION')} to='/game'>
                    <ion-icon name="add-outline"></ion-icon>
                    Addition
                </StyledModeButton>
                <StyledModeButton onClick={() => onMode('SUBSTRACTION')} to='/game'>
                    <ion-icon name="remove-outline"></ion-icon>
                    Subtraction
                </StyledModeButton>
                <StyledModeButton onClick={() => onMode('MULTIPLICATION')} to='/game'>
                    <ion-icon name="close-outline"></ion-icon>
                    Multiplication
                </StyledModeButton>
                <StyledModeButton onClick={() => onMode('DIVISION')} to='/game'>
                    <ion-icon name="pause-outline"></ion-icon>
                    Division
                </StyledModeButton>
                <StyledModeButton onClick={() => onMode(null)} to="/game">
                    <ion-icon name="cube-outline"></ion-icon>
                    Random
                </StyledModeButton>
            </Flexbox>
        </Flexbox>
    );
};

export default Modes;