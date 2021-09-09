const defaultState = {
    answer: '',
}

const ADD = 'ADD',
      DEL = 'DEL',
      CLS = 'CLS';

const AnswerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD:
            if (state.answer.length < 8) {
                return {...state, answer: state.answer + action.payload}
            } else {
                return {...state, answer: state.answer}
            }
        case DEL:
            return {...state, answer: state.answer.substring(0, state.answer.length - 1)}
        case CLS:
            return {...state, answer: ''}
        default:
            return state;
    }
}

export default AnswerReducer;
export const addAnswerReducer = (payload) => ({type: ADD, payload});
export const delAnswerReducer = () => ({type: DEL});
export const clsAnswerReducer = () => ({type: CLS});