const RECORDING = false;

export default function isRecordingReducer(state = RECORDING, action) {
  switch (action.type) {
    case 'TOGGLE_RECORDING':
      console.log(action.payload);
      return !action.payload;

    default:
      return RECORDING;
  }
}