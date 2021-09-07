import React from 'react';
import styled from 'styled-components';
import { Grid } from 'styled-css-grid';
import { StyledBackButton, StyledKeyboardButton } from '../components/Buttons';
import Flexbox from '../components/Flexbox';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswerReducer, delAnswerReducer} from '../store/AnswerReducer';

const StyledTask = styled.div`
    font-size: 2.7rem;
    font-weight: 400;
`

const StyledAnswer = styled.input`
    width: 90%;
    color: ${props => props.theme.colors.accent};
    text-align: center;
    background-color: transparent;
    border: none;
    font-size: 3.2rem;
    border-bottom: 1px solid ${props => props.theme.colors.accent};
    &:focus {
        outline: none;
    }
`

const Game = (props) => {

    const dispatch = useDispatch();
    const answer = useSelector(state => state.answer.answer);
    const task = useSelector(state => state.task.task);

    function onNumber(num) {
        dispatch(addAnswerReducer(num));
    }

    function delNumber() {
        dispatch(delAnswerReducer());
    }
    
    function addTask() {
        dispatch({type: 'ADDITION'});
    }

    return (
        <Flexbox direction="column">
            <StyledBackButton to="/menu">
                <ion-icon name="arrow-back-outline"></ion-icon>
            </StyledBackButton>
            <Flexbox direction="column" justify="center" align="center" height="100%">
                <StyledTask>{task.first} {task.operation} {task.second}</StyledTask>
                <StyledTask>?</StyledTask>
                <StyledAnswer 
                    type="number" 
                    maxLength="8" 
                    value={answer}
                    readOnly/>
            </Flexbox>
            <Grid columns={3} rows={"repeat(4, 13vh)"} gap={"0"}>
                <StyledKeyboardButton onClick={() => onNumber('1')}>1</StyledKeyboardButton>
                <StyledKeyboardButton onClick={() => onNumber('2')}>2</StyledKeyboardButton>
                <StyledKeyboardButton onClick={() => onNumber('3')}>3</StyledKeyboardButton>
                <StyledKeyboardButton onClick={() => onNumber('4')}>4</StyledKeyboardButton>
                <StyledKeyboardButton onClick={() => onNumber('5')}>5</StyledKeyboardButton>
                <StyledKeyboardButton onClick={() => onNumber('6')}>6</StyledKeyboardButton>
                <StyledKeyboardButton onClick={() => onNumber('7')}>7</StyledKeyboardButton>
                <StyledKeyboardButton onClick={() => onNumber('8')}>8</StyledKeyboardButton>
                <StyledKeyboardButton onClick={() => onNumber('9')}>9</StyledKeyboardButton>
                <StyledKeyboardButton onClick={delNumber}>
                    <ion-icon name="backspace-outline"></ion-icon>
                </StyledKeyboardButton>
                <StyledKeyboardButton onClick={() => onNumber('0')}>0</StyledKeyboardButton>
                <StyledKeyboardButton onClick={addTask}>
                    <ion-icon name="checkmark-outline"></ion-icon>
                </StyledKeyboardButton>
            </Grid>
        </Flexbox>
    );
};

export default Game;