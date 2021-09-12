import React from 'react';
import { StyledMenuButton } from '../components/Buttons';
import Flexbox from '../components/Flexbox';
import { StyledTitle } from '../components/Texts';

const Menu = () => {
    return (
        <Flexbox direction="column" justify="center" align="center" padding="1rem">
            <StyledTitle>Mind Math</StyledTitle>
            <Flexbox direction="column" margin="1rem" justify="center" align="center">
                <StyledMenuButton 
                    to="/MindMath/modes">Start game
                </StyledMenuButton>
                <StyledMenuButton 
                    to="/MindMath/tips">Useful tips
                    </StyledMenuButton>
                <StyledMenuButton 
                    to="/MindMath/settings">Settings
                </StyledMenuButton>
                <StyledMenuButton 
                    to="/MindMath/about">About
                </StyledMenuButton>
            </Flexbox>
        </Flexbox>
    );
};

export default Menu;