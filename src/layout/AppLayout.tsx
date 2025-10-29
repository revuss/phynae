import Hero from "./landing/Hero";
import Navbar from "./Navbar";
import useLenis from "../hooks/useLenis";

const AppLayout = () => {
  useLenis();
  return (
    <div className="font-secondary">
      <Navbar />
      <Hero />
      <div className="h-screen flex items-center justify-center">Trst</div>
    </div>
  );
};

export default AppLayout;
