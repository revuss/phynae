import { HERO_FEATURES } from "../../commons/app.constants";
import HeroTitles from "./HeroTitles";

const Hero = () => {
  return (
    <header className="bg-primary-500 py-7 md:py-0 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-[92%] mx-auto grid place-items-center grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <HeroTitles />
        <div className="relative mt-10">
          <ul className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
            {HERO_FEATURES.map(({ title, desc }, index) => {
              const offsets = [
                "translate-y-0 rotate-1",
                "-translate-y-4 -rotate-2",
                "translate-y-3 rotate-2",
                "-translate-y-2 rotate-0",
              ];
              return (
                <li
                  key={title}
                  className={`relative z-10 w-full max-w-sm p-5 rounded-2xl bg-white/35 backdrop-blur-md border border-primary-200 shadow-xl transition-all duration-500 hover:scale-105 hover:bg-white/40 hover:shadow-2xl ${offsets[index]} animate-float`}
                >
                  <div className="flex gap-3 items-start">
                    <div>
                      <div className="font-semibold text-white text-base">
                        {title}
                      </div>
                      <p className="text-sm font-semibold text-primary-500 mt-1">
                        {desc}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Hero;
