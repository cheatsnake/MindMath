import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import AnswerReducer from "./AnswerReducer";
import TaskReducer from "./TaskReducer";

const rootReducer = combineReducers({
    answer: AnswerReducer,
    task: TaskReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;