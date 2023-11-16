// to combine all the individual reducers in one file 

import taskReducer from './taskReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    tasks: taskReducer,
});


export default rootReducer;