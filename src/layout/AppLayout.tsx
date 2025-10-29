import Hero from "./landing/Hero";
import Navbar from "./Navbar";

const AppLayout = () => {
  return (
    <div className="font-secondary">
      <Navbar />
      <Hero />
    </div>
  );
};

export default AppLayout;
