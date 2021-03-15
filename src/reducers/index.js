import {combineReducers} from 'redux';
import {reducer} from 'redux-form';
import postReducer from './postReducer';

export default combineReducers({
    posts:postReducer,
    form:reducer
});