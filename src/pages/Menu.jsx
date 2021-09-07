import React from 'react';
import { StyledMenuButton } from '../components/Buttons';
import Flexbox from '../components/Flexbox';

const Menu = () => {
    return (
        <Flexbox direction="column" justify="center" align="center" padding="1rem">
            <h1>Mind Math</h1>
            <Flexbox direction="column" margin="1rem" justify="center" align="center">
                <StyledMenuButton to="/modes">Start game</StyledMenuButton>
                <StyledMenuButton to="/tips">Useful tips</StyledMenuButton>
                <StyledMenuButton to="/settings">Settings</StyledMenuButton>
                <StyledMenuButton to="/about">About</StyledMenuButton>
            </Flexbox>
        </Flexbox>
    );
};

export default Menu;