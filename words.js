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

// Categorized lists: embedded fallback parsed from words_by_difficulty.txt contents
window.JUST_ONE_WORDS_BY_DIFFICULTY = { Easy: [], Medium: [], Hard: [] };

// Embed text so difficulty works immediately without network
(function embedDifficultyFromText() {
  try {
    const embedded = `Easy
River
Forest
Ocean
Castle
Bridge
Garden
Robot
Pirate
Wizard
Dragon
Ninja
Knight
Princess
King
Queen
Monster
Guitar
Piano
Violin
Trumpet
Drum
Flute
Singer
Dancer
Artist
Actor
Apple
Banana
Orange
Grape
Lemon
Cherry
Peach
Mango
Avocado
Coconut
Sun
Moon
Star
Cloud
Rainbow
Thunder
Lightning
Snow
Wind
Storm
Car
Train
Airplane
Bicycle
Motorcycle
Bus
Boat
Helicopter
Book
Library
School
Teacher
Student
Doctor
Nurse
Pilot
Chef
Football
Basketball
Tennis
Soccer
Baseball
Hockey
Golf
Running
Swimming
Yoga
Coffee
Tea
Milk
Juice
Water
Soda
Bread
Cheese
Pizza
Burger
Computer
Phone
Camera
Radio
Television
Clock
Key
Map
Lamp
Chair
Table
Desk
Window
Door
Floor
Ceiling
Wall
Mirror
Bottle
Glass
Plate
Fork
Spoon
Knife
Napkin
Straw
Pan
Pot
Oven
Stove
Fridge
Freezer
Microwave
Toaster
Kettle
Backpack
Wallet
Purse
Umbrella
Watch
Ring
Necklace
Bracelet
Gloves
Hat
Scarf
Boots
Shoes
Socks
Jacket
Towel
Soap
Shampoo
Toothbrush
Toothpaste
Comb
Brush
Razor
Sunscreen
Lotion
Dog
Cat
Horse
Cow
Pig
Sheep
Goat
Chicken
Duck
Goose
Turkey
Deer
Rabbit
Fox
Wolf
Bear
Lion
Tiger
Elephant
Giraffe
Zebra
Kangaroo
Koala
Panda
Monkey
Eagle
Hawk
Owl
Swan
Penguin
Dolphin
Whale
Shark
Seal
Turtle
Frog
Snake
Lizard
Butterfly
Bee
Ant
Spider
City
Village
Town
Country
Museum
Theater
Cinema
Park
Zoo
Aquarium
Restaurant
Cafe
Bakery
Market
Airport
Harbor
Station
Hospital
Hotel
Beach
Jungle
Writer
Painter
Designer
Manager
Coach
Farmer
Fisherman
Firefighter
Police
Soldier
Lawyer
Judge
Dentist
Plumber
Carpenter
Electrician
Mechanic
Barber
Baker
Waiter
Cashier
Librarian
Pasta
Rice
Noodles
Soup
Salad
Steak
Sandwich
Hotdog
Fries
Pancake
Waffle
Cereal
Yogurt
Icecream
Chocolate
Candy
Cookie
Strawberry
Blueberry
Raspberry
Blackberry
Pineapple
Watermelon
Pear
Plum
Carrot
Potato
Tomato
Onion
Garlic
Pepper
Cucumber
Lettuce
Spinach
Broccoli
Broom
Mop
Vacuum
Drill
Hammer
Screwdriver
Wrench
Nail
Screw
Tape
Glue
Rope
Chain
Bucket
Ladder
Candle
Battery
Charger
Cable
Remote
Morning
Evening
Night
Day
Spring
Summer
Autumn
Winter
Wave
Red
Blue
Green
Yellow
Purple
Pink
Orange
Brown
Black
White
Circle
Square
Triangle
Rectangle
Diamond
Star
Heart
Arrow
Cube
Passport
Ticket
Luggage
Suitcase
Tent
Hiking
Camping
Skateboard
Scooter
Tablet
Laptop
Desktop
Monitor
Keyboard
Mouse
Printer
Speaker
Headphones
Microphone
Console
Controller
Game
Wifi
Gift
Balloon
Flag
Banner
Poster
Painting
Statue
Trophy
Medal
Calendar
Notebook
Paper
Pencil
Pen
Marker
Eraser
Sharpener
Ruler
Scissors
Envelope
Stamp
Package
Box
Bag
Cart
Basket
Shelf
Closet
Drawer

Medium
Mountain
Desert
Island
Temple
Rocket
Submarine
Engineer
Leopard
Cheetah
Gorilla
Chimpanzee
Orangutan
Octopus
Crocodile
Alligator
Valley
Waterfall
Volcano
Cave
Director
Developer
Scientist
Astronaut
Sushi
Taco
Burrito
Kiwi
Apricot
Dawn
Dusk
Season
Heat
Cold
Fog
Mist
Hail
Ice
Frost
Tide
Spiral
Compass
Sleepingbag
Skis
Snowboard
Surfboard
Canoe
Kayak
Sailboat
Yacht
Ferry
Drone
Sculpture

Hard
Canyon
Glacier
Savanna
Tundra
Server
Network
Paradox
Enigma
Conundrum
Dilemma
Quandary
Abstraction
Allegory
Archetype
Paradigm
Dogma
Ethos
Pathos
Logos
Nexus
Infinity
Eternity
Void
Abyss
Chaos
Order
Equilibrium
Entropy
Singularity
Epiphany
Revelation
Obscurity
Ambiguity
Anonymity
Transience
Impermanence
Ephemeral
Solitude
Melancholy
Euphoria
Reverie
Dichotomy
Duality
Continuum
Metaphor
Irony
Ontology
Epistemology
Semantics
Syntax
Heuristic
Fractal
Parallax
Liminality
Anachronism
Catalyst`;
    const sections = { Easy: [], Medium: [], Hard: [] };
    let current = null;
    embedded.split(/\r?\n/).forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) return;
      if (trimmed === 'Easy' || trimmed === 'Medium' || trimmed === 'Hard') {
        current = trimmed;
        return;
      }
      if (current && sections[current]) sections[current].push(trimmed);
    });
    window.JUST_ONE_WORDS_BY_DIFFICULTY = sections;
    const merged = Array.from(new Set([].concat(...Object.values(sections))));
    if (merged.length > 0) {
      window.JUST_ONE_WORDS = merged;
    }
  } catch (_) {}
})();

// Then attempt to fetch newer lists at runtime and override/merge
(function loadDifficultyWordLists() {
  try {
    if (typeof fetch !== 'function') return;
    fetch('./words_by_difficulty.txt')
      .then(r => (r && r.ok ? r.text() : Promise.reject(new Error('Failed to load words_by_difficulty.txt'))))
      .then(text => {
        const sections = { Easy: [], Medium: [], Hard: [] };
        let current = null;
        text.split(/\r?\n/).forEach(line => {
          const trimmed = line.trim();
          if (!trimmed) return;
          if (trimmed === 'Easy' || trimmed === 'Medium' || trimmed === 'Hard') {
            current = trimmed;
            return;
          }
          if (current && sections[current]) sections[current].push(trimmed);
        });
        // Merge with embedded lists (prefer fetched if available)
        const out = { Easy: [], Medium: [], Hard: [] };
        ['Easy','Medium','Hard'].forEach(k => {
          const a = Array.isArray(window.JUST_ONE_WORDS_BY_DIFFICULTY[k]) ? window.JUST_ONE_WORDS_BY_DIFFICULTY[k] : [];
          const b = Array.isArray(sections[k]) ? sections[k] : [];
          out[k] = Array.from(new Set([...a, ...b]));
        });
        window.JUST_ONE_WORDS_BY_DIFFICULTY = out;
        const merged = Array.from(new Set([].concat(...Object.values(out))));
        if (merged.length > 0) {
          window.JUST_ONE_WORDS = merged;
        }
      })
      .catch(() => {});
  } catch (_) {}
})();

window.pickRandomWord = function pickRandomWord(difficulty) {
  let list = window.JUST_ONE_WORDS || [];
  if (
    difficulty &&
    window.JUST_ONE_WORDS_BY_DIFFICULTY &&
    Array.isArray(window.JUST_ONE_WORDS_BY_DIFFICULTY[difficulty]) &&
    window.JUST_ONE_WORDS_BY_DIFFICULTY[difficulty].length > 0
  ) {
    list = window.JUST_ONE_WORDS_BY_DIFFICULTY[difficulty];
  }
  if (!Array.isArray(list) || list.length === 0) return 'Word';
  const idx = Math.floor(Math.random() * list.length);
  return String(list[idx]);
};


