let formUser = document.getElementById("form");
let movements = 0;
let relaxMode = false;
let stopwatch = 0;

let groupEmojis = [
  ["🦄", "🍦"],
  ["❤️", "🔥"],
  ["🍉", "🎄", "⚽"],
  ["💈", "🐵", "🏠"],
];

let actualLevel = 0;

let levels = [
  {
    cards: groupEmojis[0],
    maxMovements: 3,
    time: 1,
  },
  {
    cards: groupEmojis[0].concat(groupEmojis[1]),
    maxMovements: 8,
    time: 2,
  },
  {
    cards: groupEmojis[0].concat(groupEmojis[1], groupEmojis[2]),
    maxMovements: 12,
    time: 4,
  },
  {
    cards: groupEmojis[0].concat(
      groupEmojis[1],
      groupEmojis[2],
      groupEmojis[3]
    ),
    maxMovements: 18,
    time: 6,
  },
];
