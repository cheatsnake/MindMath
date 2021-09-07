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
}

const ADDITION = 'ADDITION',
      SUBSTRACTION = 'SUBSTRACTION',
      MULTIPLICATION = 'MULTIPLICATION',
      DIVISION = 'DIVISION',
      RANDOM = 'RANDOM',
      CHECK = 'CHECK';

function generate(length) {
    return Math.round(Math.random() * length);
}

const TaskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADDITION:
            const first = generate(state.addLenght);
            const second = generate(state.addLenght);
            const operation = '+';
            return {...state, task: {first, second, operation} }
        case CHECK:
            return
        default:
            return state;
    }
}

export default TaskReducer;
