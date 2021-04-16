import { combineReducers } from 'redux';
import {
  newStoryReducer,
  prioritizedReducer,
  inProgressReducer,
  completedReducer,
  deployedReducer,
  storyReducer,
} from './storyReducer';

export const rootReducer = combineReducers({
  newStoryReducer,
  prioritizedReducer,
  inProgressReducer,
  completedReducer,
  deployedReducer,
  storyReducer,
});
