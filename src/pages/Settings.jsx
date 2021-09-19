import React from 'react';
import styled from 'styled-components';
import { BackButton, StyledBitButton } from '../components/Buttons';
import Flexbox from '../components/Flexbox';
import { useDispatch, useSelector } from 'react-redux';
import { changeAddTaskReducer, changeSubTaskReducer, changeMulTaskReducer, changeDivTaskReducer, changeTimeTaskReducer } from '../store/TaskReducer';
import { StyledDescr, StyledSubTitle, StyledTitle} from '../components/Texts';

const StyledCount = styled.div`
    padding: 0 1rem;
    font-weight: 600;
    font-size: 2rem;
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
        if(state.toString().length > 1) {
            dispatch(func(+(state.toString().substring(0, state.toString().length - 1))))
        } else {
            dispatch(func(9999))
        }
    }

    function changeTime(func, state) {
        if (state > 5) {
            dispatch(func(1));
        } else if (state < 1) {
            dispatch(func(5));
        } else {
            dispatch(func(state));
        }
    }

    return (
        <Flexbox direction="column" justify="center" align="center" padding="1rem">
            <BackButton/>
            <StyledTitle>Settings</StyledTitle>
            <Flexbox direction="column">
                <StyledDescr align="left">Select the maximum bit depth of the numbers for various arithmetic operations.</StyledDescr>
                <Flexbox justify="space-between" align="center" margin="1rem 0 0 0">
                    <StyledSubTitle>Addition</StyledSubTitle>
                    <Flexbox width="auto">
                        <StyledBitButton onClick={() => onUpBit(changeAddTaskReducer, task.addLenght)}>+</StyledBitButton>
                        <StyledCount>{task.addLenght.toString().length}</StyledCount>
                        <StyledBitButton onClick={() => onDownBit(changeAddTaskReducer, task.addLenght)}>&#8211;</StyledBitButton>
                    </Flexbox>
                </Flexbox>
                <Flexbox justify="space-between" align="center" margin="1rem 0 0 0">
                    <StyledSubTitle>Subtract</StyledSubTitle>
                    <Flexbox width="auto">
                        <StyledBitButton onClick={() => onUpBit(changeSubTaskReducer, task.subLenght)}>+</StyledBitButton>
                        <StyledCount>{task.subLenght.toString().length}</StyledCount>
                        <StyledBitButton onClick={() => onDownBit(changeSubTaskReducer, task.subLenght)}>&#8211;</StyledBitButton>
                    </Flexbox>
                </Flexbox>
                <Flexbox justify="space-between" align="center" margin="1rem 0 0 0">
                    <StyledSubTitle>Multiply</StyledSubTitle>
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
                <StyledDescr marginTop="2rem" align="left">Select the maximum round time.</StyledDescr>
                <Flexbox justify="space-between" align="center" margin="1rem 0 0 0">
                    <StyledSubTitle>Time</StyledSubTitle>
                    <Flexbox width="auto">
                        <StyledBitButton onClick={() => changeTime(changeTimeTaskReducer, task.roundTime + 1)}>+</StyledBitButton>
                        <StyledCount>{task.roundTime}m</StyledCount>
                        <StyledBitButton onClick={() => changeTime(changeTimeTaskReducer, task.roundTime - 1)}>&#8211;</StyledBitButton>
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        </Flexbox>
    );
};

export default Settings;