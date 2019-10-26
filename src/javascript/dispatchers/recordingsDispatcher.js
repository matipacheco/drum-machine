export const updateRecordingStatusDispatcher = (startTime = null, isRecording = false) => ({
  type: 'UPDATE_RECORDING_STATUS',
  payload: {
    startTime: startTime,
    isRecording: isRecording,
  },
});

export const addBeatToRecording = (thaBeat = {}) => ({
  type: 'ADD_BEAT',
  payload: thaBeat
});