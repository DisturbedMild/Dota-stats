import {Hero} from "@/common/types";

const getHero = (heroId: number, heroes: Record<string, Hero>): Hero | undefined => {
  for (const key in heroes) {
    if (key === heroId.toString()) {
      return heroes[key]
    }
  }
  return
}

export default getHero;
