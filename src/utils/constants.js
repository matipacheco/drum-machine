export const DRUM_MACHINE_SIZE = 4;

/* ************************************************************************
Button colouring methods
************************************************************************ */

const padColors = [
  [
    'light-greenish-blue', 'faded-poster', 'green-darner-tail', 'shy-moment'
  ],
  [
    'mint-leaf', 'robins-egg-blue', 'electron-blue', 'exodus-fruit'
  ],
  [
    'sour-lemon', 'first-date', 'pink-glamour', 'pico-8-pink'
  ],
  [
    'bright-yarrow', 'orangeville', 'chi-gong', 'prunus-avium'
  ]
];

export function getPadColor(rowIndex, colIndex) {
  return padColors[rowIndex][colIndex];
}

/* ************************************************************************
Keyboard events handling methods
************************************************************************ */

const keyCodes = [
  [49, 50, 51, 52],
  [81, 87, 69, 82],
  [65, 83, 68, 70],
  [90, 88, 67, 86],
];

export function getPadKeyCode(rowIndex, colIndex) {
  return keyCodes[rowIndex][colIndex];
}

/* ************************************************************************
Sound methods
************************************************************************ */

const padSounds = [
  ['C4', 'E4', 'G4', 'B4'],
  ['C3', 'E3', 'G3', 'B3'],
  ['C2', 'E2', 'G2', 'B2'],
  ['C1', 'E1', 'G1', 'B1']
];

const padSoundDuration = [
  [0.5, 0.5, 0.5, 0.5],
  [0.5, 0.5, 0.5, 0.5],
  [0.5, 0.5, 0.5, 0.5],
  [0.5, 0.5, 0.5, 0.5]
];

export function getPadAttackReleaseParams(rowIndex, colIndex) {
  return [
    padSounds[rowIndex][colIndex],
    padSoundDuration[rowIndex][colIndex]
  ]
}