import {
  EXPLORE_COURSES,
  GET_FREE_DEMO,
  HERO_DESC,
  HERO_TITLE,
} from "../../commons/app.constants";
import Button from "../../components/ui/Button";

const HeroTitles = () => {
  return (
    <div>
      <h1 className="text-4xl sm:text-5xl font-primary font-extrabold text-white leading-tight">
        {HERO_TITLE}
      </h1>
      <p className="mt-2 font-medium text-primary-100 max-w-xl">{HERO_DESC}</p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Button variant="ghost" className="md:min-w-[15vw]">
          {EXPLORE_COURSES}
        </Button>
        <Button variant="outlinelink" className="md:min-w-[15vw]">
          {GET_FREE_DEMO}
        </Button>
      </div>
    </div>
  );
};

export default HeroTitles;
