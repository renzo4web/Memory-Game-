let movements = 0;
let relaxMode = false;
let stopwatch = 00;

let groupEmojis = [
  ["🦄", "🍦"],
  ["❤️", "🔥"],
  ["🍉", "🎄"],
];

let actualLevel = 0;

let levels = [
  {
    cards: groupEmojis[0],
    maxMovements: 3,
  },
  {
    cards: groupEmojis[0].concat(groupEmojis[1]),
    maxMovements: 8,
  },
  {
    cards: groupEmojis[0].concat(groupEmojis[1], groupEmojis[2]),
    maxMovements: 12,
  },
];
