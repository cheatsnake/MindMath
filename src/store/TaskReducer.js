const defaultState = {
    task: {
        first: '',
        second: '',
        operation: ''
    },
    addLenght: 99,
    subLenght: 99,
    mulLenght: 99,
    divLenght: 99,
    mode: '',
    roundTime: 1,
}

const ADDITION = 'ADDITION',
      SUBSTRACTION = 'SUBSTRACTION',
      MULTIPLICATION = 'MULTIPLICATION',
      DIVISION = 'DIVISION',
      MODE = 'MODE',
      CHANGE_ADD = 'CHANGE_BIT',
      CHANGE_SUB = 'CHANGE_SUB',
      CHANGE_MUL = 'CHANGE_MUL',
      CHANGE_DIV = 'CHANGE_DIV',
      CHANGE_TIME = 'CHANGE_TIME';

function generate(length) {
    return Math.round(Math.random() * length);
}

const TaskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADDITION:
            const firstAdd = generate(state.addLenght);
            const secondAdd = generate(state.addLenght);
            const operationAdd = '+';
            return {...state, task: {first: firstAdd, second: secondAdd, operation: operationAdd} }
        case SUBSTRACTION:
            const firstSub = generate(state.subLenght);
            const secondSub = generate(state.subLenght);
            const operationSub = '-';
            if (firstSub < secondSub) {
                return {...state, task: {first: secondSub, second: firstSub, operation: operationSub} }
            }
            return {...state, task: {first: firstSub, second: secondSub, operation: operationSub} }
        case MULTIPLICATION:
            const firstMul = generate(state.mulLenght);
            const secondMul = generate(state.mulLenght);
            const operationMul = '*';
            return {...state, task: {first: firstMul, second: secondMul, operation: operationMul} }
        case DIVISION:
            const firstDiv = generate(state.divLenght);
            let secondDiv = generate(state.divLenght);
            for(secondDiv; firstDiv % secondDiv !== 0 || secondDiv < 1; secondDiv = generate(state.divLenght / 2)) {}
            const operationDiv = '/';
            return {...state, task: {first: firstDiv, second: secondDiv, operation: operationDiv} }
        case MODE:
            return {...state, mode: action.payload}
        case CHANGE_ADD:
            return {...state, addLenght: action.payload}
        case CHANGE_SUB:
            return {...state, subLenght: action.payload}
        case CHANGE_MUL:
            return {...state, mulLenght: action.payload}
        case CHANGE_DIV:
            return {...state, divLenght: action.payload}
        case CHANGE_TIME:
            return {...state, roundTime: action.payload}
        default:
            return state;
    }
}

export default TaskReducer;
export const modeTaskReducer = (payload) => ({type: MODE, payload});
export const changeAddTaskReducer = (payload) => ({type: CHANGE_ADD, payload});
export const changeSubTaskReducer = (payload) => ({type: CHANGE_SUB, payload});
export const changeMulTaskReducer = (payload) => ({type: CHANGE_MUL, payload});
export const changeDivTaskReducer = (payload) => ({type: CHANGE_DIV, payload});
export const changeTimeTaskReducer = (payload) => ({type: CHANGE_TIME, payload});