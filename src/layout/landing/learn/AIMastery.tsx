import { motion } from "framer-motion";
import HeroTerminal from "../HeroTerminal";

const AIMastery = () => {
  return (
    <section className="min-h-screen bg-primary-500 text-white flex flex-col justify-center items-center px-6 py-24 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-100/10 via-transparent to-blue-500/10 blur-3xl"></div>

      <div className="relative z-10 max-w-6xl text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold font-primary"
        >
          Merge <span className="text-black">AI</span> and{" "}
          <span className="text-black">Fullstack</span> to Build Smarter Systems
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Every module at Phynae comes with AI integration guides — from
          deploying chatbots to automating server tasks. Learn how to make
          fullstack apps intelligent, scalable, and efficient.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 flex justify-start text-start flex-row gap-2"
        >
          <HeroTerminal />
          <HeroTerminal />
        </motion.div>
      </div>
    </section>
  );
};

export default AIMastery;
