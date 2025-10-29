const HeroTerminal = () => {
  return (
    <div className="relative bg-[#0d1117] md:w-[90%] rounded-xl border border-primary-500 text-[#c9d1d9] font-mono text-sm shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-md before:absolute before:inset-0 before:bg-liner-to-br before:from-[#238636]/10 before:to-[#58a6ff]/10 before:rounded-xl before:blur-2xl before:z-0 overflow-hidden">
      {/* Terminal Header */}
      <div className="relative z-10 flex items-center gap-2 bg-[#161b22] px-4 py-2 border-b border-[#30363d]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
        <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
        <span className="ml-3 text-xs text-[#8b949e]"></span>
      </div>

      {/* Terminal Content */}
      <div className="relative z-10 p-2 space-y-4">
        <div className="flex text-xs">
          <div className="text-[#58a6ff]">$</div>
          <p className="ml-4 text-[#c9d1d9]">
            Initializing{" "}
            <span className="text-primary-200">Payment Integration Lab...</span>
          </p>
        </div>

        <div className="border-l-2 border-[#30363d] pl-4 space-y-1 text-xs">
          <p>
            💳 Mock payment created —{" "}
            <span className="text-[#3fb950]">$15.00</span>
          </p>
          <p>
            🔗 Webhook triggered —{" "}
            <span className="text-[#3fb950]">success</span>
          </p>
          <p>
            🌐 Domain provisioned —{" "}
            <span className="text-[#58a6ff]">staging ready</span>
          </p>
        </div>

        <div className="text-xs">
          <div className="mt-2 bg-[#161b22]/80 rounded-md p-3 text-[#c9d1d9] border border-[#30363d]">
            <p>
              <span className="text-[#58a6ff]">mvn</span> mock-payment
            </p>
            <p>
              <span className="text-[#58a6ff]">yarn</span> run open-lab
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTerminal;
