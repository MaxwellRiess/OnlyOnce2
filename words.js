// Minimal built-in word list. Extend as desired.
// Source: common nouns suitable for party play (no special chars)
window.JUST_ONE_WORDS = [
  'Mountain','River','Forest','Ocean','Desert','Island','Castle','Bridge','Garden','Temple',
  'Robot','Pirate','Wizard','Dragon','Ninja','Knight','Princess','King','Queen','Monster',
  'Guitar','Piano','Violin','Trumpet','Drum','Flute','Singer','Dancer','Artist','Actor',
  'Apple','Banana','Orange','Grape','Lemon','Cherry','Peach','Mango','Avocado','Coconut',
  'Sun','Moon','Star','Cloud','Rainbow','Thunder','Lightning','Snow','Wind','Storm',
  'Car','Train','Airplane','Rocket','Bicycle','Motorcycle','Bus','Boat','Submarine','Helicopter',
  'Book','Library','School','Teacher','Student','Doctor','Nurse','Engineer','Pilot','Chef',
  'Football','Basketball','Tennis','Soccer','Baseball','Hockey','Golf','Running','Swimming','Yoga',
  'Coffee','Tea','Milk','Juice','Water','Soda','Bread','Cheese','Pizza','Burger',
  'Computer','Phone','Camera','Radio','Television','Clock','Key','Map','Lamp','Chair'
];

window.pickRandomWord = function pickRandomWord() {
  const list = window.JUST_ONE_WORDS || [];
  if (!Array.isArray(list) || list.length === 0) return 'Word';
  const idx = Math.floor(Math.random() * list.length);
  return String(list[idx]);
};


