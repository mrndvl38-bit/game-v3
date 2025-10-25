// Character name generation and simple event/role helpers for the game
// This file is safe to include in the browser (defines globals) and
// also exports functions for Node/Jest tests (CommonJS).

const NAMES = {
  ape: [
    'Koko', 'Caesar', 'Kong', 'Nim', 'Lucy', 'Kanzi', 'Washoe', 'Loulis',
    'Bonnie', 'Chim', 'Panzee', 'Travis', 'Oliver', 'Bubbles'
  ],
  hominin: [
    'Ardi', 'Selam', 'Asa', 'Omo', 'Turkana', 'Naledi', 'Neo',
    'Ida', 'Taung', 'Sediba', 'Paranthropus', 'Australo'
  ],
  human: [
    'Adam', 'Eve', 'Zara', 'Kai', 'Luna', 'Atlas', 'Nova', 'Phoenix',
    'River', 'Sage', 'Terra', 'Sky', 'Rain', 'Dawn', 'Dusk'
  ]
};

const ROLES = ['gatherer', 'hunter', 'healer'];

const EVENTS = [
  { text: "{name} discovered ancient hunting techniques", effect: { intelligence: 0.05 } },
  { text: "{name} found a natural spring", effect: { health: 20 } },
  { text: "{name} encountered a dangerous predator", effect: { health: -30 } },
  { text: "Food spoiled in the heat", effect: { food: -20 } },
  { text: "{name} mastered tool crafting", effect: { tools: 2 } },
  { text: "{name}'s agility improved from constant foraging", effect: { speed: 0.2 } },
  { text: "A storm damaged the group's supplies", effect: { food: -15, tools: -1 } },
  { text: "{name} learned medicinal properties of plants", effect: { medicine: 2 } },
  { text: "{name} discovered a new food source!", effect: { food: 20 } },
  { text: "{name} taught others better gathering techniques", effect: { intelligence: 0.1 } },
  { text: "{name} found a safe shelter", effect: { health: 15 } },
  { text: "{name} improved tool use", effect: { speed: 0.2 } }
];

function getRandomName(species = 'ape') {
  const key = (species || 'ape').toString().toLowerCase();
  const list = NAMES[key] || NAMES.ape;
  return list[Math.floor(Math.random() * list.length)];
}

function getRandomRole() {
  return ROLES[Math.floor(Math.random() * ROLES.length)];
}

function getRandomEvent() {
  return EVENTS[Math.floor(Math.random() * EVENTS.length)];
}

function getRandomSkill() {
  return Math.random();
}

// Expose to browser globals if available
if (typeof window !== 'undefined') {
  window.getRandomName = getRandomName;
  window.getRandomRole = getRandomRole;
  window.getRandomEvent = getRandomEvent;
  window.getRandomSkill = getRandomSkill;
}

// Export for Node/tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    NAMES,
    ROLES,
    EVENTS,
    getRandomName,
    getRandomRole,
    getRandomEvent,
    getRandomSkill
  };
}