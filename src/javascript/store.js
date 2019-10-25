import { combineReducers, createStore } from 'redux';

import recordingReducer from "./reducers/recordingsReducer";
import { updateRecordingStatusReducer } from "./reducers/isRecordingReducer";

const reducers = combineReducers({
  recordings: recordingReducer,
  recordingStatus: updateRecordingStatusReducer,
});

const store = createStore(reducers);
export default store;