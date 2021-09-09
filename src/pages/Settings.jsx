import React from 'react';
import styled from 'styled-components';
import { StyledBackButton, StyledBitButton } from '../components/Buttons';
import Flexbox from '../components/Flexbox';
import { useDispatch, useSelector } from 'react-redux';
import { clsAnswerReducer } from '../store/AnswerReducer';
import { changeAddTaskReducer, changeSubTaskReducer, changeMulTaskReducer, changeDivTaskReducer } from '../store/TaskReducer';

const StyledCount = styled.div`
    padding: 0 1rem;
    font-weight: 600;
    font-size: 2rem;
`
const StyledDescr = styled.p`
    font-weight: 300;
    margin-top: 1rem;
    text-align: center;
`

const StyledSubTitle = styled.h2`
    text-align: right;
    font-size: 1.2rem;
    font-weight: 500;
`

const Settings = () => {
    const dispatch = useDispatch();
    const task = useSelector(state => state.task);

    function onUpBit(func, state) {
        if(state.toString().length < 4) {
            dispatch(func(+(state + '9')))
        } else {
            dispatch(func(9))
        }
    }

    function onDownBit(func, state) {
        console.log(state);
        if(state.toString().length > 1) {
            dispatch(func(+(state.toString().substring(0, state.toString().length - 1))))
        } else {
            dispatch(func(9999))
        }
    }

    return (
        <Flexbox direction="column" justify="center" align="center" padding="1rem">
            <StyledBackButton onClick={() => dispatch(clsAnswerReducer())} to="/menu">
                <ion-icon name="arrow-back-outline"></ion-icon>
            </StyledBackButton>
            <h1>Settings</h1>
            <Flexbox direction="column">
                <StyledDescr>Select the maximum bit depth of the numbers for various arithmetic operations.</StyledDescr>
                <Flexbox justify="space-between" align="center" margin="2rem 0 0 0">
                    <StyledSubTitle>Addition</StyledSubTitle>
                    <Flexbox width="auto">
                        <StyledBitButton onClick={() => onUpBit(changeAddTaskReducer, task.addLenght)}>+</StyledBitButton>
                        <StyledCount>{task.addLenght.toString().length}</StyledCount>
                        <StyledBitButton onClick={() => onDownBit(changeAddTaskReducer, task.addLenght)}>&#8211;</StyledBitButton>
                    </Flexbox>
                </Flexbox>
                <Flexbox justify="space-between" align="center" margin="1rem 0 0 0">
                    <StyledSubTitle>Subtraction</StyledSubTitle>
                    <Flexbox width="auto">
                        <StyledBitButton onClick={() => onUpBit(changeSubTaskReducer, task.subLenght)}>+</StyledBitButton>
                        <StyledCount>{task.subLenght.toString().length}</StyledCount>
                        <StyledBitButton onClick={() => onDownBit(changeSubTaskReducer, task.subLenght)}>&#8211;</StyledBitButton>
                    </Flexbox>
                </Flexbox>
                <Flexbox justify="space-between" align="center" margin="1rem 0 0 0">
                    <StyledSubTitle>Multiplication</StyledSubTitle>
                    <Flexbox width="auto">
                        <StyledBitButton onClick={() => onUpBit(changeMulTaskReducer, task.mulLenght)}>+</StyledBitButton>
                        <StyledCount>{task.mulLenght.toString().length}</StyledCount>
                        <StyledBitButton onClick={() => onDownBit(changeMulTaskReducer, task.mulLenght)}>&#8211;</StyledBitButton>
                    </Flexbox>
                </Flexbox>
                <Flexbox justify="space-between" align="center" margin="1rem 0 0 0">
                    <StyledSubTitle>Division</StyledSubTitle>
                    <Flexbox width="auto">
                        <StyledBitButton onClick={() => onUpBit(changeDivTaskReducer, task.divLenght)}>+</StyledBitButton>
                        <StyledCount>{task.divLenght.toString().length}</StyledCount>
                        <StyledBitButton onClick={() => onDownBit(changeDivTaskReducer, task.divLenght)}>&#8211;</StyledBitButton>
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        </Flexbox>
    );
};

export default Settings;