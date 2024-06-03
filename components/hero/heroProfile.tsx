import Image from "next/image";
import {IAbility, IHeroStats} from "@/services/api/endpoints/types";
import Ability from "@components/abilities/ability";

type THeroProfileProps = {
  hero: string,
  currentHero: IHeroStats | undefined,
  winrate: number,
  abilitiesInfo: IAbility[],
}

const HeroProfile = ({ hero, currentHero, winrate, abilitiesInfo }: THeroProfileProps) => {
  return (
    <div className="relative w-full rounded-lg overflow-hidden bg-black/90">
      <Image
        className="absolute opacity-35 bg-no-repeat blur-xl object-cover w-[125%] h-[125%] w-full h-full "
        src={`/heroes/${hero
          ?.replaceAll(" ", "_")
          .toLocaleLowerCase()}.png`} alt="Backround hero image" width={256} height={144}/>
      <div className="flex items-start p-14 relative z-10 gap-5">
        <div className="w-2/12">
          <Image
            className="rounded-3xl"
            src={`/heroes/${hero?.replaceAll(" ", "_").toLocaleLowerCase()}.png`}
            alt={`${currentHero?.localized_name}`}
            width={256}
            height={144}
          />
        </div>
        <div className="text-lg text-white w-4/12">
          <h1 className="my-2 text-4xl font-bold">
            {currentHero?.localized_name}
          </h1>
          <div>
            {currentHero?.attack_type} - <span
            className="uppercase text-xs text-gray-500">{currentHero?.roles.map((role: string, index: number) => {
            if (index === currentHero?.roles.length - 1) {
              return <>{role}</>
            } else {
              return <>{role}, </>
            }
          })}</span>
          </div>
          <div
            className={`my-3 text-xs uppercase ${
              Number(winrate) < 50 ? "text-red-500" : "text-green-500"
            }`}
          > Winrate:{winrate}%
          </div>
        </div>
        <div className="flex flex-col gap-4 w-6/12">
          <div className="mx-auto px-6 py-2 w-3/5 bg-black/45 rounded">
            <div className="flex items-center justify-between gap-4">
              <div className="flex gap-2 items-center">
                <div className="bg-red-700 rounded-full w-2 h-2"></div>
                <div className="text-white text-xs">{currentHero?.base_str} + {currentHero?.str_gain}</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-green-600 rounded-full w-2 h-2"></div>
                <div className="text-white text-xs">{currentHero?.base_agi} + {currentHero?.agi_gain}</div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-blue-700 rounded-full w-2 h-2"></div>
                <div className="text-white text-xs">{currentHero?.base_int} + {currentHero?.int_gain}</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            {abilitiesInfo && abilitiesInfo?.map((ability: IAbility) => (
              <Ability key={ability.dname} {...ability} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroProfile;
