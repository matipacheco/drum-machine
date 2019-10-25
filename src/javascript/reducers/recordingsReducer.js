const RECORDINGS = [];

export default function recordingReducer(state = RECORDINGS, action) {
  switch (action.type) {
    case 'ADD_RECORDING':
      return [];

    case 'REMOVE_RECORDING':
      return [];

    default:
      return RECORDINGS;
  }
}