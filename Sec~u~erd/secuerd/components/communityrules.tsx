export default function CommunityRules() {
  const rules = [
    "Use knowledge ethically",
    "Respect everyone",
    "Maintain professionalism",
    "No spam or self-promotion",
    "Support learning",
    "Protect privacy",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-8">

        <div className="text-center mb-12">
          <span className="text-yellow-600 font-semibold uppercase tracking-widest">
            Community Rules
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Learn Responsibly
          </h2>
        </div>

        <div className="bg-black text-green-400 rounded-3xl p-8 font-mono shadow-xl">

          <div className="mb-6">
            $ cat rules.txt
          </div>

          {rules.map((rule) => (
            <div key={rule} className="mb-3">
              ✓ {rule}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}