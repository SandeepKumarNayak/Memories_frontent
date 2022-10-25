import {combineReducers} from 'redux';

import auth from './auth';
import posts from './post.js';
export default combineReducers({auth,posts});