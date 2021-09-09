import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Game from './pages/Game';
import Menu from './pages/Menu';
import Modes from './pages/Modes';
import Settings from './pages/Settings';

const StyledApp = styled.div`
    display: flex;
    justify-content: center;
    max-width: 425px;
    margin: 0 auto;
    height: 100vh;
    background-color: ${props => props.theme.colors.dark};
    color: ${props => props.theme.font.dark};
`

const App = () => {
    return (
        <BrowserRouter>
            <StyledApp>
                <Switch>
                    <Route path="/menu">
                        <Menu/>
                    </Route>
                    <Route path="/modes">
                        <Modes/>
                    </Route>
                    <Route path="/game">
                        <Game/>
                    </Route>
                    <Route path="/settings">
                        <Settings/>
                    </Route>
                    <Redirect to="/menu"/>
                </Switch>
            </StyledApp>
        </BrowserRouter>
    );
};

export default App;