
import { combineReducers } from 'redux';

import books from './bookStore';

const creatRootReducer = combineReducers({
    //add imported reducer
    books
});

export default creatRootReducer;