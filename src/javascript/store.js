import { combineReducers, createStore } from 'redux';

import recordingReducer from "./reducers/recordingsReducer";
import isRecordingReducer from "./reducers/isRecordingReducer";

const reducers = combineReducers({
  recordings: recordingReducer,
  isRecording: isRecordingReducer
});

const store = createStore(reducers);
export default store;