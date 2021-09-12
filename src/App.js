import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import About from './pages/About';
import Game from './pages/Game';
import Menu from './pages/Menu';
import Modes from './pages/Modes';
import Settings from './pages/Settings';
import Tips from './pages/Tips';

const StyledApp = styled.div`
    display: flex;
    justify-content: center;
    max-width: 425px;
    margin: 0 auto;
    min-height: 100vh;
    color: ${props => props.theme.font.dark};
`

const App = () => {

    return (
        <>
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
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/tips">
                        <Tips/>
                    </Route>
                    <Redirect to="/menu"/>
                </Switch> 
            </StyledApp>
            <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            </div >
        </>
    );
};

export default App;