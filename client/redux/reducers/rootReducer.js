import { combineReducers } from 'redux';
import {
  newStoryReducer,
  prioritizedReducer,
  inProgressReducer,
  completedReducer,
  deployedReducer,
} from './storyReducer';

export const rootReducer = combineReducers({
  newStoryReducer,
  prioritizedReducer,
  inProgressReducer,
  completedReducer,
  deployedReducer,
});
