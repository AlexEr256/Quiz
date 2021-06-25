import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import QuestionReducer from './reducers/QuestionsReducer'
import UserReducer from './reducers/UserReducer'

const rootReducer = combineReducers({
    QuestionReducer,
    UserReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;