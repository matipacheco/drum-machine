export const DRUM_MACHINE_SIZE = 4;

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

const keyCodes = [
  [49, 50, 51, 52],
  [81, 87, 69, 82],
  [65, 83, 68, 70],
  [90, 88, 67, 86],
];

export function getPadKeyCode(rowIndex, colIndex) {
  return keyCodes[rowIndex][colIndex];
}