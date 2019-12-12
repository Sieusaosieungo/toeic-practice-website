import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';
import exam from './exam';

const rootReducer = combineReducers({ auth, user, exam });

export default rootReducer;
