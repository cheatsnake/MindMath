import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Grid } from 'styled-css-grid';
import { BackButton, StyledKeyboardButton } from '../components/Buttons';
import Flexbox from '../components/Flexbox';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswerReducer, delAnswerReducer, clsAnswerReducer} from '../store/AnswerReducer';

const StyledStats = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    opacity: 0.7;
    position: absolute;
    top: 0.7rem;
    right: 0.7rem;
    font-size: 0.9rem;
    font-weight: 200;
    div {
        margin-left: 10px;
        &:nth-child(1) {
            color: ${props => props.theme.colors.accent};
        }
        &:nth-child(2) {
            color: #e74747;
        }
        &:nth-child(3) {
            color: #cacaca;
        }
    }
    
`

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
    &:focus {
        outline: none;
    }
`

const Game = (props) => {

    const dispatch = useDispatch();
    const answer = useSelector(state => state.answer.answer);
    const task = useSelector(state => state.task.task);
    const mode = useSelector(state => state.task.mode);

    const [stats, setStats] = useState({
        true: 0,
        false: 0,
        accuracy: 0
    })
    
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
            setStats({
                true: stats.true + 1,
                false: stats.false,
                accuracy: (((stats.true + 1) / (stats.true + 1 + stats.false)).toFixed(3) * 100).toFixed(0) + '%'
            })
            addTask();
            dispatch(clsAnswerReducer());
        } else {
            setStats({
                true: stats.true,
                false: stats.false + 1,
                accuracy: (((stats.true) / (stats.true + stats.false + 1)).toFixed(3) * 100).toFixed(0) + '%'
            })
        }
    }

    useEffect(() => addTask(), []);

    return (
        <Flexbox direction="column">
            <BackButton/>
            {
                stats.accuracy ? (
                    <StyledStats>
                        <div>{stats.true}</div>
                        <div>{stats.false}</div>
                        <div>{stats.accuracy}</div>
                    </StyledStats>
                ) : null
            }
            <Flexbox direction="column" justify="center" align="center" height="100%">
                <StyledTask>{task.first} {task.operation === '*' ? '×' : task.operation} {task.second}</StyledTask>
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