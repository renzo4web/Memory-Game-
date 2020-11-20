let movements = 0;

let groupEmojis = [
  ["🦄", "🍦"],
  ["❤️", "🔥"],
  ["🍉", "🎄"],
];

let actualLevel = 0;

let levels = [
  { cards: groupEmojis[0] },
  { cards: groupEmojis[0].concat(groupEmojis[1]) },
  { cards: groupEmojis[0].concat(groupEmojis[1], groupEmojis[2]) },
];
