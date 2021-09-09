import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Grid } from 'styled-css-grid';
import { StyledBackButton, StyledKeyboardButton } from '../components/Buttons';
import Flexbox from '../components/Flexbox';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswerReducer, delAnswerReducer, clsAnswerReducer} from '../store/AnswerReducer';

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
    /* border-bottom: 1px solid ${props => props.theme.colors.accent}; */
    &:focus {
        outline: none;
    }
`

const Game = (props) => {

    const dispatch = useDispatch();
    const answer = useSelector(state => state.answer.answer);
    const task = useSelector(state => state.task.task);
    const mode = useSelector(state => state.task.mode);

    const modes = ['ADDITION', 'SUBSTRACTION', 'MULTIPLICATION', 'DIVISION'];

    function onNumber(num) {
        dispatch(addAnswerReducer(num));
    }

    function delNumber() {
        dispatch(delAnswerReducer());
    }
    
    const addTask = () => {
            if (mode) {
                dispatch({type: mode});
            } else {
                dispatch({type: modes[Math.floor(Math.random() * modes.length)]});
            }
    };

    const checkAnswer = () => {
        let check;
        switch (task.operation) {
            case "+":
                check = task.first + task.second;
                break;
            case "-":
                check = task.first - task.second;
                break;
            case "*":
                check = task.first * task.second;
                break;
            case "/":
                check = task.first / task.second;
                break;
            default:
                break;
        }
        if(check === +answer) {
            addTask();
            dispatch(clsAnswerReducer());
        }
    }

    useEffect(() => addTask(), []);

    return (
        <Flexbox direction="column">
            <StyledBackButton onClick={() => dispatch(clsAnswerReducer())} to="/menu">
                <ion-icon name="arrow-back-outline"></ion-icon>
            </StyledBackButton>
            <Flexbox direction="column" justify="center" align="center" height="100%">
                <StyledTask>{task.first} {task.operation === '*' ? <ion-icon name="close-outline"></ion-icon> : task.operation} {task.second}</StyledTask>
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
                <StyledKeyboardButton onClick={checkAnswer}>
                    <ion-icon name="checkmark-outline"></ion-icon>
                </StyledKeyboardButton>
            </Grid>
        </Flexbox>
    );
};

export default Game;