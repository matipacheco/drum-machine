import { combineReducers, createStore } from 'redux';

import {
  addBeatReducer,
  recordingReducer,
  updateRecordingStatusReducer
} from "./reducers/recordingsReducer";

const reducers = combineReducers({
  recordings: recordingReducer,
  currentRecording: addBeatReducer,
  recordingStatus: updateRecordingStatusReducer,
});

const store = createStore(reducers);
export default store;