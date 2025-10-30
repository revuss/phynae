import HeroTerminal from "../HeroTerminal";

const LearnByBuilding = () => {
  return (
    <section className="min-h-screen bg-white text-primary-900 flex flex-col justify-center items-center px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            Learn by{" "}
            <span className="text-primary-500">
              Building Real-World Systems
            </span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Move beyond tutorials. Build production-grade systems — from payment
            gateways to AI-powered tools — directly in your sandboxed lab.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>✅ Guided full-stack projects</li>
            <li>✅ Mock API & payment environments</li>
            <li>✅ Real deployment pipelines</li>
          </ul>
          <button className="mt-6 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition">
            Explore Labs
          </button>
        </div>

        {/* Right: HeroTerminal */}
        <div className="flex justify-center md:justify-end">
          <HeroTerminal />
        </div>
      </div>
    </section>
  );
};

export default LearnByBuilding;
