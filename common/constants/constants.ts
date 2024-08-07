interface GameMode {
  id: number;
  name: string;
  balanced?: boolean;
}

export const GAME_MODE: Record<number, GameMode> = {
  "0": {
    id: 0,
    name: "game_mode_unknown",
    balanced: true,
  },
  "1": {
    id: 1,
    name: "game_mode_all_pick",
    balanced: true,
  },
  "2": {
    id: 2,
    name: "game_mode_captains_mode",
    balanced: true,
  },
  "3": {
    id: 3,
    name: "game_mode_random_draft",
    balanced: true,
  },
  "4": {
    id: 4,
    name: "game_mode_single_draft",
    balanced: true,
  },
  "5": {
    id: 5,
    name: "game_mode_all_random",
    balanced: true,
  },
  "6": {
    id: 6,
    name: "game_mode_intro",
  },
  "7": {
    id: 7,
    name: "game_mode_diretide",
  },
  "8": {
    id: 8,
    name: "game_mode_reverse_captains_mode",
  },
  "9": {
    id: 9,
    name: "game_mode_greeviling",
  },
  "10": {
    id: 10,
    name: "game_mode_tutorial",
  },
  "11": {
    id: 11,
    name: "game_mode_mid_only",
  },
  "12": {
    id: 12,
    name: "game_mode_least_played",
    balanced: true,
  },
  "13": {
    id: 13,
    name: "game_mode_limited_heroes",
  },
  "14": {
    id: 14,
    name: "game_mode_compendium_matchmaking",
  },
  "15": {
    id: 15,
    name: "game_mode_custom",
  },
  "16": {
    id: 16,
    name: "game_mode_captains_draft",
    balanced: true,
  },
  "17": {
    id: 17,
    name: "game_mode_balanced_draft",
    balanced: true,
  },
  "18": {
    id: 18,
    name: "game_mode_ability_draft",
  },
  "19": {
    id: 19,
    name: "game_mode_event",
  },
  "20": {
    id: 20,
    name: "game_mode_all_random_death_match",
  },
  "21": {
    id: 21,
    name: "game_mode_1v1_mid",
  },
  "22": {
    id: 22,
    name: "game_mode_all_draft",
    balanced: true,
  },
  "23": {
    id: 23,
    name: "game_mode_turbo",
  },
  "24": {
    id: 24,
    name: "game_mode_mutation",
  },
  "25": {
    id: 25,
    name: "game_mode_coaches_challenge",
  },
};

export const REGION: Record<number, string> = {
  1: "US WEST",
  2: "US EAST",
  3: "EUROPE",
  5: "SINGAPORE",
  6: "DUBAI",
  7: "AUSTRALIA",
  8: "STOCKHOLM",
  9: "AUSTRIA",
  10: "BRAZIL",
  11: "SOUTHAFRICA",
  12: "PW TELECOM SHANGHAI",
  13: "PW UNICOM",
  14: "CHILE",
  15: "PERU",
  16: "INDIA",
  17: "PW TELECOM GUANGDONG",
  18: "PW TELECOM ZHEJIANG",
  19: "JAPAN",
  20: "PW TELECOM WUHAN",
  25: "PW UNICOM TIANJIN",
  37: "TAIWAN",
  38: "ARGENTINA",
};
