const RECORDINGS = [];

export function recordingReducer(state = RECORDINGS, action) {
  switch (action.type) {
    case 'ADD_RECORDING':
      return [];

    default:
      return RECORDINGS;
  }
}

export function addBeatReducer(state = RECORDINGS, action) {
  switch (action.type) {
    case 'ADD_BEAT':
      debugger
      return [
        ...state,
        action.payload,
      ];

    default:
      return RECORDINGS;
  }
}

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