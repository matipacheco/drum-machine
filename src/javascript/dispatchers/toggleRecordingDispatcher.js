const toggleRecordingDispatcher = (isRecording) => ({
  type: 'TOGGLE_RECORDING',
  payload: isRecording,
});

export default toggleRecordingDispatcher;