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
  'Computer','Phone','Camera','Radio','Television','Clock','Key','Map','Lamp','Chair',
  // More common objects
  'Table','Desk','Window','Door','Floor','Ceiling','Wall','Mirror','Bottle','Glass',
  'Plate','Fork','Spoon','Knife','Napkin','Straw','Pan','Pot','Oven','Stove',
  'Fridge','Freezer','Microwave','Toaster','Kettle','Backpack','Wallet','Purse','Umbrella','Watch',
  'Ring','Necklace','Bracelet','Gloves','Hat','Scarf','Boots','Shoes','Socks','Jacket',
  'Towel','Soap','Shampoo','Toothbrush','Toothpaste','Comb','Brush','Razor','Sunscreen','Lotion',
  // Animals
  'Dog','Cat','Horse','Cow','Pig','Sheep','Goat','Chicken','Duck','Goose',
  'Turkey','Deer','Rabbit','Fox','Wolf','Bear','Lion','Tiger','Leopard','Cheetah',
  'Elephant','Giraffe','Zebra','Kangaroo','Koala','Panda','Monkey','Gorilla','Chimpanzee','Orangutan',
  'Eagle','Hawk','Owl','Swan','Penguin','Dolphin','Whale','Shark','Octopus','Seal',
  'Turtle','Frog','Snake','Lizard','Crocodile','Alligator','Butterfly','Bee','Ant','Spider',
  // Places
  'City','Village','Town','Country','Museum','Theater','Cinema','Park','Zoo','Aquarium',
  'Restaurant','Cafe','Bakery','Market','Airport','Harbor','Station','Hospital','Hotel','Beach',
  'Mountain','Valley','Canyon','Waterfall','Volcano','Glacier','Cave','Jungle','Savanna','Tundra',
  // Professions
  'Writer','Painter','Singer','Dancer','Actor','Director','Designer','Developer','Manager','Coach',
  'Farmer','Fisherman','Firefighter','Police','Soldier','Scientist','Astronaut','Lawyer','Judge','Dentist',
  'Plumber','Carpenter','Electrician','Mechanic','Barber','Chef','Baker','Waiter','Cashier','Librarian',
  // Foods
  'Pasta','Rice','Noodles','Soup','Salad','Steak','Sushi','Taco','Burrito','Sandwich',
  'Hotdog','Fries','Pancake','Waffle','Cereal','Yogurt','Icecream','Chocolate','Candy','Cookie',
  'Strawberry','Blueberry','Raspberry','Blackberry','Pineapple','Watermelon','Kiwi','Pear','Plum','Apricot',
  'Carrot','Potato','Tomato','Onion','Garlic','Pepper','Cucumber','Lettuce','Spinach','Broccoli',
  // Household & tools
  'Broom','Mop','Vacuum','Drill','Hammer','Screwdriver','Wrench','Nail','Screw','Tape',
  'Glue','Rope','Chain','Bucket','Ladder','Candle','Battery','Charger','Cable','Remote',
  // Nature & weather
  'Dawn','Dusk','Morning','Evening','Night','Day','Season','Spring','Summer','Autumn',
  'Winter','Heat','Cold','Fog','Mist','Hail','Ice','Frost','Wave','Tide',
  // Colors & shapes
  'Red','Blue','Green','Yellow','Purple','Pink','Orange','Brown','Black','White',
  'Circle','Square','Triangle','Rectangle','Diamond','Star','Heart','Arrow','Spiral','Cube',
  // Transportation & travel
  'Passport','Ticket','Luggage','Suitcase','Map','Compass','Tent','Sleepingbag','Hiking','Camping',
  'Skateboard','Scooter','Skis','Snowboard','Surfboard','Canoe','Kayak','Sailboat','Yacht','Ferry',
  // Technology
  'Tablet','Laptop','Desktop','Monitor','Keyboard','Mouse','Printer','Speaker','Headphones','Microphone',
  'Charger','Battery','Drone','Robot','Console','Controller','Game','Server','Network','Wifi',
  // Misc
  'Gift','Balloon','Flag','Banner','Poster','Painting','Sculpture','Statue','Trophy','Medal',
  'Calendar','Notebook','Paper','Pencil','Pen','Marker','Eraser','Sharpener','Ruler','Scissors',
  'Envelope','Stamp','Package','Box','Bag','Cart','Basket','Shelf','Closet','Drawer'
];

window.pickRandomWord = function pickRandomWord() {
  const list = window.JUST_ONE_WORDS || [];
  if (!Array.isArray(list) || list.length === 0) return 'Word';
  const idx = Math.floor(Math.random() * list.length);
  return String(list[idx]);
};


