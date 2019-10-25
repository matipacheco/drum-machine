export function updateRecordingStatusReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_RECORDING_STATUS':
      return {
        startTime: action.payload.startTime,
        isRecording: action.payload.isRecording
      };

    default:
      return {
        startTime: null,
        isRecording: false,
      };
  }
}