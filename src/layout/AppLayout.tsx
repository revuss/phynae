import Hero from "./landing/Hero";
import Navbar from "./Navbar";
import useLenis from "../hooks/useLenis";
import LearnByBuilding from "./landing/learn/Learn";
import AIMastery from "./landing/learn/AIMastery";

const AppLayout = () => {
  useLenis();
  return (
    <div className="font-secondary">
      <Navbar />
      <Hero />
      <LearnByBuilding />
      <AIMastery />
    </div>
  );
};

export default AppLayout;
