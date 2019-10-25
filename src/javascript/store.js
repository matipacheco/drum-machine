import { combineReducers, createStore } from 'redux';

import isRecordingReducer from "./reducers/isRecordingReducer";

const reducers = combineReducers({
  isRecording: isRecordingReducer
});

const store = createStore(reducers);
export default store;