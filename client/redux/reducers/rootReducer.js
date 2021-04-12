import { combineReducers } from 'redux';
import { storyReducer } from './storyReducer';

export const rootReducer = combineReducers({ storyReducer });
